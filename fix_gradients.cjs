const fs = require('fs');
const path = require('path');

function walk(dir) {
  fs.readdirSync(dir).forEach(f => {
    let p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (p.endsWith('.css') || p.endsWith('.jsx')) {
      let orig = fs.readFileSync(p, 'utf8');
      let text = orig;

      text = text.replace(/#050a18/g, '#f8f9fc');
      text = text.replace(/#0a0a0a/g, '#f0f4f8');
      
      text = text.replace(/linear-gradient\([^)]+\)/g, (match) => {
        return match.replace(/#000000/g, '#ffffff').replace(/#000/g, '#ffffff');
      });
      
      text = text.replace(/background:\s*#000000/g, 'background: #ffffff');
      text = text.replace(/background:\s*#000;/g, 'background: #ffffff;');
      text = text.replace(/background:\s*#000\s/g, 'background: #ffffff ');

      if (text !== orig) {
        fs.writeFileSync(p, text);
        console.log("Fixed", p);
      }
    }
  });
}
walk('src');
