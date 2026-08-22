const fs = require('fs');
const path = require('path');

function walk(dir) {
  fs.readdirSync(dir).forEach(f => {
    let p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else {
      if (p.endsWith('.css') || p.endsWith('.jsx')) {
        let text = fs.readFileSync(p, 'utf8');
        let orig = text;
        
        // Reset the hack
        if (p.endsWith('index.css')) {
          text = text.replace(/--white:\s*#000000;\s*\/\*\s*Inverted\s*\*\//g, '--white: #ffffff;');
          text = text.replace(/--black:\s*#ffffff;\s*\/\*\s*Inverted\s*\*\//g, '--black: #000000;');
          
          text = text.replace(/background:\s*var\(--white\);/g, 'background: var(--white);'); 
          text = text.replace(/color:\s*var\(--black\);/g, 'color: var(--black);'); 
          
          text = text.replace(/color:\s*#000000;/g, 'color: var(--black);');
          text = text.replace(/background:\s*#ffffff;/g, 'background: var(--white);');
        }
        
        if (text !== orig) {
          fs.writeFileSync(p, text);
          console.log("Updated", p);
        }
      }
    }
  });
}
walk('src');
