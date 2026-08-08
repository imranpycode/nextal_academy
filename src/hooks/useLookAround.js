import { useRef } from 'react'

// Smooth angle lerp
const lerpAngle = (a, b, t) => {
  let diff = b - a
  while (diff > Math.PI) diff -= 2 * Math.PI
  while (diff < -Math.PI) diff += 2 * Math.PI
  return a + diff * t
}

export function useLookAround() {
  const state = useRef({
    elapsed: 0,
    nextLook: 3 + Math.random() * 4,
    targetYaw: 0,
    targetPitch: 0,
    currentYaw: 0,
    currentPitch: 0,
    walkPhase: 0,
    headTiltPhase: 0,
  })

  /**
   * Make the head look around naturally while also nodding while walking.
   * @param {number} delta
   * @param {boolean} isWalking
   * @param {React.MutableRefObject} headRef
   * @param {THREE.Vector2} mouse - normalised mouse position
   */
  const update = (delta, isWalking, headRef, mouse) => {
    const s = state.current
    s.elapsed += delta
    s.headTiltPhase += delta * 1.8

    // Randomly pick a new look direction
    if (s.elapsed >= s.nextLook) {
      s.elapsed = 0
      s.nextLook = 2 + Math.random() * 5
      s.targetYaw = (Math.random() - 0.5) * 0.6
      s.targetPitch = (Math.random() - 0.5) * 0.25
    }

    // Mouse attraction (soft)
    const mouseInfluenceY = mouse ? mouse.x * 0.3 : 0
    const mouseInfluenceX = mouse ? -mouse.y * 0.2 : 0

    const finalYaw = s.targetYaw + mouseInfluenceY
    const finalPitch = s.targetPitch + mouseInfluenceX

    // Smooth lerp toward target
    s.currentYaw = lerpAngle(s.currentYaw, finalYaw, delta * 2.5)
    s.currentPitch += (finalPitch - s.currentPitch) * delta * 2.5

    // Walking head bob
    const bob = isWalking ? Math.sin(s.headTiltPhase * 2.2) * 0.025 : 0

    // Gentle head tilt sway
    const tilt = Math.sin(s.headTiltPhase * 0.7) * (isWalking ? 0.04 : 0.02)

    if (headRef?.current) {
      headRef.current.rotation.y = s.currentYaw
      headRef.current.rotation.x = s.currentPitch + bob
      headRef.current.rotation.z = tilt
    }
  }

  return { update }
}
