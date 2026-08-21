const fs = require('fs');
const extraCss = `
/* Mobile Accordion Dropdowns */
@media (max-width: 1023px) {
  .nav-dropdown.mobile-open > .dropdown-menu {
    display: flex !important;
  }
  .nav-sub-dropdown.mobile-open > .dropdown-menu {
    display: flex !important;
  }
  /* Ensure chevrons rotate nicely */
  .sub-dropdown-toggle {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
`;
fs.appendFileSync('src/index.css', extraCss);
console.log('Appended mobile-open CSS to index.css');
