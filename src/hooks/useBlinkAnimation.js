import { useRef } from 'react'

export function useBlinkAnimation() {
  const state = useRef({
    nextBlink: 2 + Math.random() * 3,
    elapsed: 0,
    blinkProgress: 0,
    isBlinking: false,
    blinkDuration: 0.12,
  })

  /**
   * Animate eye blink on a random schedule.
   * @param {number} delta
   * @param {THREE.MeshStandardMaterial} eyeMaterial - material to animate
   */
  const update = (delta, leftEyeRef, rightEyeRef) => {
    const s = state.current
    s.elapsed += delta

    if (!s.isBlinking && s.elapsed >= s.nextBlink) {
      s.isBlinking = true
      s.blinkProgress = 0
      s.elapsed = 0
      s.nextBlink = 2.5 + Math.random() * 4
    }

    if (s.isBlinking) {
      s.blinkProgress += delta / s.blinkDuration
      // 0 → 1 → 0 blink arc
      const t = s.blinkProgress
      let scaleY
      if (t < 0.5) {
        scaleY = 1 - t * 2        // close
      } else if (t < 1.0) {
        scaleY = (t - 0.5) * 2   // open
      } else {
        scaleY = 1
        s.isBlinking = false
      }
      scaleY = Math.max(0.05, scaleY)
      if (leftEyeRef?.current)  leftEyeRef.current.scale.y = scaleY
      if (rightEyeRef?.current) rightEyeRef.current.scale.y = scaleY
    }
  }

  return { update }
}
