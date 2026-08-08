import { useRef } from 'react'

export function useIdleAnimation() {
  const state = useRef({ phase: 0, breathPhase: 0 })

  /**
   * Gentle breathing + body sway + walking bounce.
   * bodyRef must be the group that wraps the ENTIRE model (inside scale={0.01}).
   * @param {number} delta
   * @param {boolean} isWalking
   * @param {React.MutableRefObject} bodyRef - inner float group
   */
  const update = (delta, isWalking, bodyRef) => {
    const s = state.current
    s.phase       += delta * 1.2
    s.breathPhase += delta * (isWalking ? 3 : 1.5)

    if (!bodyRef?.current) return

    // Breathing scale — very subtle
    const breathAmp = 0.008
    const sc = 1 + Math.sin(s.breathPhase) * breathAmp
    bodyRef.current.scale.set(sc, sc, sc)

    // Gentle y float (in model coords — inside scale 0.01 so world impact is tiny)
    const floatAmp = isWalking ? 1.5 : 1.2
    const floatFreq = isWalking ? 3   : 1.2
    bodyRef.current.position.y = Math.sin(s.breathPhase * floatFreq) * floatAmp

    // Sway left/right
    const swayAmp = isWalking ? 0.03 : 0.012
    bodyRef.current.rotation.z = Math.sin(s.phase * 0.9) * swayAmp
  }

  return { update }
}
