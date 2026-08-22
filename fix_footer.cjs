const fs = require('fs');
let p = 'src/components/Footer/Footer.module.css';
let text = fs.readFileSync(p, 'utf8');

text = text.replace(/\.footer \{\s*background: #ffffff;/g, '.footer {\n  background: #050a18;');
text = text.replace(/#ffffff 100%/g, '#050a18 100%');
text = text.replace(/color: #000000;/g, 'color: #ffffff;');
text = text.replace(/rgba\(0, 0, 0,/g, 'rgba(255, 255, 255,');

fs.writeFileSync(p, text);
