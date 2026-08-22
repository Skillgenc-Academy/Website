const fs = require('fs');
const path = require('path');
function walk(dir) {
  fs.readdirSync(dir).forEach(f => {
    let p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (p.endsWith('.jsx')) {
      let orig = fs.readFileSync(p, 'utf8');
      let text = orig;
      text = text.replace(/style=\{\{\s*color:\s*['"]#ffffff['"]/g, "style={{ color: '#000000'");
      if (text !== orig) {
        fs.writeFileSync(p, text);
        console.log("Fixed JSX", p);
      }
    }
  });
}
walk('src');
