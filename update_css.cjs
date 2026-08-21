const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf-8');

const targetRegex = /\.anim-text, \.anim-button, \.anim-image, \.anim-card, \.anim-nav, \.anim-badge \{[\s\S]*?\}\s*\.anim-nav \{[\s\S]*?\}\s*\.anim-text, \.anim-badge \{[\s\S]*?\}\s*\.anim-button \{[\s\S]*?\}\s*\.anim-image \{[\s\S]*?\}\s*\.anim-card \{[\s\S]*?\}/;

const replacement = `.anim-text, .anim-button, .anim-image, .anim-card, .anim-nav, .anim-badge {
  opacity: 0;
  will-change: opacity, transform, filter;
  transition: opacity var(--reveal-duration, var(--anim-duration)) var(--anim-ease), 
              transform var(--reveal-duration, var(--anim-duration)) var(--anim-ease),
              filter var(--reveal-duration, var(--anim-duration)) var(--anim-ease);
}

.anim-nav {
  transform: translateY(40px);
  filter: blur(5px);
}

.anim-text, .anim-badge {
  transform: translateY(40px);
  filter: blur(8px);
}

.anim-button {
  transform: translateY(40px);
  filter: blur(4px);
}

.anim-image {
  transform: translateY(40px);
  filter: blur(4px);
}

.anim-card {
  transform: translateY(40px);
  filter: blur(10px);
  transition-delay: calc(80ms * var(--card-index, 0));
}`;

if (targetRegex.test(css)) {
  css = css.replace(targetRegex, replacement);
  fs.writeFileSync('src/index.css', css);
  console.log('Successfully updated animation CSS rules');
} else {
  console.log('Regex did not match!');
}
