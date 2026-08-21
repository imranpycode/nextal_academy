const fs = require('fs');

const additionalStyles = `
/* Laptop specific tweaks per user request */
@media (min-width: 1024px) {
  .hero-title {
    font-size: 3.5rem !important; /* Reduced from massive size */
    font-weight: 600 !important; /* Reduced font weight */
    max-width: 100% !important;
  }
  .hero-subtitle {
    font-size: 1.1rem !important; /* Reduced font size so it fits 2.5 lines */
    max-width: 85% !important; /* Gives it the 2.5 line look instead of spanning full width to 2 lines */
    margin-left: 0 !important; /* Perfect left alignment */
    padding-left: 0 !important;
  }
}
`;
fs.appendFileSync('src/index.css', additionalStyles);
console.log('Appended to index.css');
