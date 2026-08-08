const fs = require('fs');

const cssHistory = JSON.parse(fs.readFileSync('index_css_history.json', 'utf8'));

// We want to find the replace_file_content that ADDED the original circular orbit CSS.
// This would be the first one that has `--orbit-radius` or `orbit-carousel-container` but doesn't have `dark navy` or `aurora`.
let originalCss = null;
let foundV1 = false;
for (let i = 0; i < cssHistory.length; i++) {
  const call = cssHistory[i];
  if (call.name === 'replace_file_content' || call.name === 'write_to_file') {
    const content = call.args.ReplacementContent || call.args.CodeContent;
    if (content && content.includes('--orbit-radius') && !content.includes('--orbit-navy') && !content.includes('aurora-blob')) {
      originalCss = content;
    }
  }
}

if (originalCss) {
  let indexCss = fs.readFileSync('src/index.css', 'utf8');
  // Find the start of v2.0 CSS
  const startIdx = indexCss.indexOf('/* ═══════════════════════════════════════════════════════════════════\n   WhyUs — Elite Orbital Carousel v2.0');
  
  if (startIdx !== -1) {
    // The v2.0 CSS goes to the end of the file (or almost).
    indexCss = indexCss.substring(0, startIdx) + originalCss + '\n';
    fs.writeFileSync('src/index.css', indexCss);
    console.log('Restored index.css');
  } else {
    console.log('Could not find start of v2.0 CSS in index.css');
  }
} else {
  console.log('Could not find original CSS in history');
}
