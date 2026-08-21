const fs = require('fs');
const extraCss = `
@media (min-width: 1024px) {
  .placement-hero-grid {
    grid-template-columns: minmax(0, 1.4fr) minmax(400px, 1fr) !important;
  }
}
`;
fs.appendFileSync('src/index.css', extraCss);
console.log('Updated grid template for placement text width');
