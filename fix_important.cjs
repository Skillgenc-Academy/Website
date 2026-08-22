const fs = require('fs');
const path = require('path');
function walk(dir) {
  fs.readdirSync(dir).forEach(f => {
    let p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (p.endsWith('.css')) {
      let orig = fs.readFileSync(p, 'utf8');
      let text = orig.replace(/;\s*!important/g, ' !important');
      if (text !== orig) {
        fs.writeFileSync(p, text);
        console.log("Fixed !important in", p);
      }
    }
  });
}
walk('src');
