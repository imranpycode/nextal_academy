const fs = require('fs');

let indexCss = fs.readFileSync('src/index.css', 'utf8');
const lines = indexCss.split(/\r?\n/);

// Keep first 372 lines
const newLines = lines.slice(0, 372);
let newCss = newLines.join('\n');

const originalOrbit = fs.readFileSync('original_orbit.css', 'utf8');

// The new shutter animation overlay
const shutterCss = `

/* ── Sliding Shutter Panel (Decor) ── */
.premium-shutter-layer {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: #FFF8D8;
  z-index: 0; /* behind all content */
  pointer-events: none;
  transform: translateX(100%);
  animation: slideShutter 0.7s ease-in-out forwards;
}

@keyframes slideShutter {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(40%); /* Stops at 40%, covering exactly 60% of width on the right */
  }
}
`;

fs.writeFileSync('src/index.css', newCss + '\n' + originalOrbit + shutterCss);
console.log('Successfully rebuilt index.css with original orbit + new shutter panel.');
