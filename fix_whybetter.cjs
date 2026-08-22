const fs = require('fs');
let p = 'src/pages/Home/sections/WhyBetter/WhyBetter.module.css';
let text = fs.readFileSync(p, 'utf8');

text = text.replace(/linear-gradient\([^)]+\)/g, '#013D96'); // Make section dark blue
text = text.replace(/rgba\(0, 0, 0, 0\.03\)/g, 'rgba(255, 255, 255, 0.05)'); // card bg
text = text.replace(/color: #000000;/g, 'color: #ffffff;'); // card title
text = text.replace(/color: rgba\(0, 0, 0, 0\.55\);/g, 'color: rgba(255, 255, 255, 0.7);'); // card desc

fs.writeFileSync(p, text);
