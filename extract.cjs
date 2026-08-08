const fs = require('fs');

const lines = fs.readFileSync(String.raw`C:\Users\mohamed imran\.gemini\antigravity-ide\brain\cf445e3c-7caf-4143-8511-bc79f3221b33\.system_generated\logs\transcript_full.jsonl`, 'utf8').split('\n');

let whyUsWrites = [];
let indexCssWrites = [];

for (const line of lines) {
  if (!line.trim()) continue;
  try {
    const data = JSON.parse(line);
    if (data.tool_calls) {
      for (const call of data.tool_calls) {
        if (call.name === 'write_to_file' || call.name === 'replace_file_content' || call.name === 'multi_replace_file_content') {
          if (call.args.TargetFile && call.args.TargetFile.includes('WhyUs.jsx')) {
            whyUsWrites.push(call);
          }
          if (call.args.TargetFile && call.args.TargetFile.includes('index.css')) {
            indexCssWrites.push(call);
          }
        }
      }
    }
  } catch (e) {}
}

// We just want to output the most recent write to WhyUs.jsx that is NOT the V2.0 one.
// Actually, I can just save the states of WhyUs.jsx and index.css over time.
fs.writeFileSync('why_us_history.json', JSON.stringify(whyUsWrites, null, 2));
fs.writeFileSync('index_css_history.json', JSON.stringify(indexCssWrites, null, 2));
console.log(`Found ${whyUsWrites.length} writes to WhyUs.jsx`);
console.log(`Found ${indexCssWrites.length} writes to index.css`);
