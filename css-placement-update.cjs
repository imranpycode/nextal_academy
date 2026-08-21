const fs = require('fs');

const additionalStyles = `
/* Placement page laptop tweaks */
@media (min-width: 1024px) {
  .placement-image-wrapper {
    margin-left: 2.5rem !important;
  }
  .placement-body {
    color: #9ca3af !important; /* light gray */
  }
  .placement-subheading {
    color: #000000 !important; /* black */
  }
  .placement-bullet-icon {
    color: #10b981 !important; /* green */
  }
  .placement-bullet-text {
    color: #9ca3af !important; /* light gray */
  }
}
`;
fs.appendFileSync('src/index.css', additionalStyles);
console.log('Appended to index.css');
