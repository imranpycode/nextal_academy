const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf-8');
let changed = [];

// ──────────────────────────────────────────────────────────────────────────
// FIX 1 (BUG-04): Replace redundant scale(1) in revealed transform reset
// ──────────────────────────────────────────────────────────────────────────
if (css.includes('transform: translate(0) scale(1);')) {
  css = css.replace('transform: translate(0) scale(1);', 'transform: translateY(0);');
  changed.push('BUG-04: fixed translate(0) scale(1) → translateY(0)');
}

// ──────────────────────────────────────────────────────────────────────────
// FIX 2 (BUG-01/02): Remove ALL prefers-reduced-motion blocks and replace
// with one single correctly scoped block at the end of the file.
// We'll remove every existing block first, then append the correct one.
// ──────────────────────────────────────────────────────────────────────────

// Pattern to strip all prefers-reduced-motion blocks (non-greedy per block)
// We match each block individually
let blockCount = 0;
css = css.replace(/@media \(prefers-reduced-motion: reduce\) \{[\s\S]*?\n\}/g, (match) => {
  blockCount++;
  return `/* prefers-reduced-motion block #${blockCount} removed — consolidated below */`;
});
if (blockCount > 0) changed.push(`BUG-01/02: removed ${blockCount} old prefers-reduced-motion blocks`);

// Append single correct consolidated block at end
const correctReducedMotion = `

/* ==========================================================================
   Accessibility: Reduced Motion
   Scoped correctly: kills keyframe animations only.
   CSS transitions are preserved so scroll-reveal still works (instantly).
   ========================================================================== */
@media (prefers-reduced-motion: reduce) {
  /* Kill only keyframe animations — do NOT kill transitions */
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
  }
  /* For reduced-motion users: scroll-reveal still toggles, but transitions are instant */
  .anim-text, .anim-button, .anim-image, .anim-card, .anim-badge, .anim-nav {
    transition-duration: 0.01ms !important;
    transition-delay: 0ms !important;
  }
  /* Keep static card/timeline animations immediate too */
  .timeline-card, .premium-feature-card, .module-premium-card {
    transition-duration: 0.01ms !important;
  }
  /* Shimmer heading: show as static gradient instead of animated */
  .animated-heading-shimmer {
    animation: none;
    background: linear-gradient(to right, #F62477, #5E086B);
    background-size: 100% auto;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
`;
css += correctReducedMotion;
changed.push('BUG-01/02: appended single correct prefers-reduced-motion block');

// ──────────────────────────────────────────────────────────────────────────
// FIX 3 (BUG-05): Add stagger delay reset for fade-out right after delay classes
// ──────────────────────────────────────────────────────────────────────────
const staggerTarget = '.delay-7 { transition-delay: 700ms; }';
const staggerReset = `.delay-7 { transition-delay: 700ms; }

/* Fade-out has no stagger \u2014 elements exit simultaneously for clean reverse scroll */
:not(.premium-revealed) > .delay-1,
:not(.premium-revealed) > .delay-2,
:not(.premium-revealed) > .delay-3,
:not(.premium-revealed) > .delay-4,
:not(.premium-revealed) > .delay-5,
:not(.premium-revealed) > .delay-6,
:not(.premium-revealed) > .delay-7 {
  transition-delay: 0ms;
}`;

if (css.includes(staggerTarget) && !css.includes(':not(.premium-revealed) > .delay-1')) {
  css = css.replace(staggerTarget, staggerReset);
  changed.push('BUG-05: added stagger delay reset for fade-out');
}

// ──────────────────────────────────────────────────────────────────────────
// FIX 4 (BUG-01 CSS): Update animation transitions to use --reveal-duration
// ──────────────────────────────────────────────────────────────────────────
const oldTransition = `  transition: opacity var(--anim-duration) var(--anim-ease), 
              transform var(--anim-duration) var(--anim-ease),
              filter var(--anim-duration) var(--anim-ease);`;
const newTransition = `  transition: opacity var(--reveal-duration, var(--anim-duration)) var(--anim-ease), 
              transform var(--reveal-duration, var(--anim-duration)) var(--anim-ease),
              filter var(--reveal-duration, var(--anim-duration)) var(--anim-ease);`;
if (css.includes(oldTransition)) {
  css = css.replace(oldTransition, newTransition);
  changed.push('BUG-01: updated transitions to use --reveal-duration variable');
}

// ──────────────────────────────────────────────────────────────────────────
// FIX 5: Normalize all anim-* transforms to translateY(40px) upward entry
// ──────────────────────────────────────────────────────────────────────────
css = css.replace('  transform: translateY(-20px);\n  filter: blur(5px);\n}\n\n.anim-text, .anim-badge {', '  transform: translateY(40px);\n  filter: blur(5px);\n}\n\n.anim-text, .anim-badge {');
css = css.replace('  transform: translateY(30px);\n  filter: blur(8px);', '  transform: translateY(40px);\n  filter: blur(8px);');
css = css.replace('  transform: scale(0.95);\n  filter: blur(4px);\n}\n\n.anim-image {', '  transform: translateY(40px);\n  filter: blur(4px);\n}\n\n.anim-image {');
css = css.replace('  transform: scale(1.05);\n  filter: blur(4px);\n}\n\n.anim-card {', '  transform: translateY(40px);\n  filter: blur(4px);\n}\n\n.anim-card {');
css = css.replace('  transform: translateY(35px);\n  filter: blur(10px);', '  transform: translateY(40px);\n  filter: blur(10px);');
changed.push('Normalized all anim-* transforms to translateY(40px)');

// ──────────────────────────────────────────────────────────────────────────
// Write result
// ──────────────────────────────────────────────────────────────────────────
fs.writeFileSync('src/index.css', css);
console.log('=== FIXES APPLIED ===');
changed.forEach(c => console.log(' ✓', c));
console.log(`\nFinal line count: ${css.split('\n').length}`);
