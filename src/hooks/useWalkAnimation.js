import { useRef } from 'react'

// Lerp angle correctly across the -PI/PI boundary
const lerpAngle = (a, b, t) => {
  let diff = b - a
  while (diff > Math.PI) diff -= 2 * Math.PI
  while (diff < -Math.PI) diff += 2 * Math.PI
  return a + diff * t
}

export function useWalkAnimation() {
  const state = useRef({
    x: 0,
    z: 0,
    heading: 0,
    targetHeading: 0,
    speed: 0,
    targetSpeed: 0,
    mode: 'idle',        // 'idle' | 'turning' | 'walk'
    modeTimer: 0,
    modeDuration: 2,
    walkPhase: 0,
    boundary: 0.8,       // world-space radius the robot stays inside
    targetX: 0,
    targetZ: 0,
  })

  const pickTarget = (s) => {
    const angle = Math.random() * Math.PI * 2
    const r = Math.random() * s.boundary * 0.8
    s.targetX = Math.cos(angle) * r
    s.targetZ = Math.sin(angle) * r
    s.targetHeading = Math.atan2(s.targetX - s.x, s.targetZ - s.z)
    s.mode = 'turning'
    s.modeTimer = 0
    s.modeDuration = 0.6 + Math.random() * 0.6
  }

  /**
   * @param {number} delta
   * @param {React.MutableRefObject} rootRef - the outermost group (position x/z + rotation y)
   * @param {React.MutableRefObject} leftLegRef
   * @param {React.MutableRefObject} rightLegRef
   * @param {React.MutableRefObject} leftArmRef
   * @param {React.MutableRefObject} rightArmRef
   * @returns {{ isWalking: boolean, walkPhase: number }}
   */
  const update = (delta, rootRef, leftLegRef, rightLegRef, leftArmRef, rightArmRef) => {
    const s = state.current
    s.modeTimer += delta

    if (s.mode === 'idle') {
      s.targetSpeed = 0
      if (s.modeTimer > s.modeDuration) pickTarget(s)
    } else if (s.mode === 'turning') {
      s.targetSpeed = 0
      s.heading = lerpAngle(s.heading, s.targetHeading, delta * 3.5)
      const diff = Math.abs(((s.targetHeading - s.heading + Math.PI) % (2 * Math.PI)) - Math.PI)
      if (diff < 0.06 || s.modeTimer > s.modeDuration) {
        s.heading = s.targetHeading
        s.mode = 'walk'
        s.modeTimer = 0
        s.modeDuration = 1.5 + Math.random() * 2.5
      }
    } else if (s.mode === 'walk') {
      s.targetSpeed = 0.45

      const dx = s.targetX - s.x
      const dz = s.targetZ - s.z
      const distToTarget = Math.sqrt(dx * dx + dz * dz)
      const distFromCenter = Math.sqrt(s.x * s.x + s.z * s.z)

      if (distFromCenter > s.boundary) {
        // Walk back to centre
        s.targetHeading = Math.atan2(-s.x, -s.z)
        s.mode = 'turning'
        s.modeTimer = 0
        s.modeDuration = 0.5
      } else if (distToTarget < 0.12 || s.modeTimer > s.modeDuration) {
        // Pause or pick new spot
        if (Math.random() < 0.4) {
          s.mode = 'idle'
          s.modeTimer = 0
          s.modeDuration = 1 + Math.random() * 2
        } else {
          pickTarget(s)
        }
      } else {
        s.targetHeading = Math.atan2(dx, dz)
        s.heading = lerpAngle(s.heading, s.targetHeading, delta * 2.5)
      }
    }

    // Smooth speed
    s.speed += (s.targetSpeed - s.speed) * Math.min(1, delta * 3.5)

    // Move
    if (s.speed > 0.005) {
      s.x += Math.sin(s.heading) * s.speed * delta
      s.z += Math.cos(s.heading) * s.speed * delta
    }

    // Accumulate walk cycle phase
    s.walkPhase += s.speed * delta * 7

    // Apply position + facing to root group
    if (rootRef?.current) {
      // Walk in the xz plane (world units at scale 2.0)
      rootRef.current.position.x += (s.x - rootRef.current.position.x) * Math.min(1, delta * 7)
      rootRef.current.position.z += (s.z - rootRef.current.position.z) * Math.min(1, delta * 7)
      // Face walking direction.
      // Model face is in local +X. R_y(θ)*[1,0,0] = [cosθ, 0, -sinθ].
      // We want this to equal movement dir [sin(heading), 0, cos(heading)].
      // Solving: θ = heading - PI/2
      rootRef.current.rotation.y = lerpAngle(rootRef.current.rotation.y, s.heading - Math.PI / 2, delta * 5)
    }

    const isWalking = s.speed > 0.04
    const swing = isWalking ? 0.3 : 0

    // Leg swing — we use rotation.z because the legs' base rotation is [0, PI/2, 0]
    // rotating around Z in the leg's local frame swings them forward/back in world space
    if (leftLegRef?.current)  leftLegRef.current.rotation.z  = Math.sin(s.walkPhase)            * swing
    if (rightLegRef?.current) rightLegRef.current.rotation.z = Math.sin(s.walkPhase + Math.PI)  * swing

    // Arm swing — opposite to legs, smaller amplitude
    const armSwing = isWalking ? 0.2 : 0
    if (leftArmRef?.current)  leftArmRef.current.rotation.z  = Math.sin(s.walkPhase + Math.PI) * armSwing
    if (rightArmRef?.current) rightArmRef.current.rotation.z = Math.sin(s.walkPhase)           * armSwing

    return { isWalking, walkPhase: s.walkPhase }
  }

  return { update }
}
