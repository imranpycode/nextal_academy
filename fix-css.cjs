const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf-8');

const newCss = css.replace(
  /\.slider-content-area\s*\{\s*position:\s*relative;\s*display:\s*flex;\s*flex-direction:\s*column;\s*justify-content:\s*center;\s*text-align:\s*left;\s*align-items:\s*flex-start;[^}]*transform:\s*translateY\(-20px\);\s*(?:\/\* Move text upwards \*\/\s*)?\}/,
  `.slider-content-area {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  align-items: flex-start;
  transform: translateY(-20px);
}

@media (min-width: 1024px) {
  .slider-content-area {
    margin-left: -140px;
  }
}`
);

fs.writeFileSync('src/index.css', newCss, 'utf-8');
console.log('Success');
