import re

with open('src/pages/Platform/index.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

replacements = [
    (
        r'<div className=\{styles.placeholderImage\}>\s*<ImageIcon size=\{48\} />\s*<span>Interactive board<br/>\(Image coming soon\)</span>\s*</div>',
        '<img src="/learn.png" alt="Interactive board" className={styles.featureImage} />'
    ),
    (
        r'<div className=\{styles.placeholderImage\}>\s*<ImageIcon size=\{48\} />\s*<span>Position analysis<br/>\(Image coming soon\)</span>\s*</div>',
        '<img src="/understand.png" alt="Position analysis" className={styles.featureImage} />'
    ),
    (
        r'<div className=\{styles.placeholderImage\}>\s*<ImageIcon size=\{48\} />\s*<span>Puzzle<br/>\(Image coming soon\)</span>\s*</div>',
        '<img src="/practice.png" alt="Puzzle" className={styles.featureImage} />'
    ),
    (
        r'<div className=\{styles.placeholderImage\}>\s*<ImageIcon size=\{48\} />\s*<span>Live game<br/>\(Image coming soon\)</span>\s*</div>',
        '<img src="/play.png" alt="Live game" className={styles.featureImage} />'
    ),
    (
        r'<div className=\{styles.placeholderImage\}>\s*<ImageIcon size=\{48\} />\s*<span>Analysis board<br/>\(Image coming soon\)</span>\s*</div>',
        '<img src="/analyse.png" alt="Analysis board" className={styles.featureImage} />'
    ),
    (
        r'<div className=\{styles.placeholderImage\}>\s*<ImageIcon size=\{48\} />\s*<span>Tournament<br/>\(Image coming soon\)</span>\s*</div>',
        '<img src="/compete.png" alt="Tournament" className={styles.featureImage} />'
    ),
    (
        r'<img src=\{trackImage\} alt="Track progress" className=\{styles.featureImage\} />',
        '<img src="/track.png" alt="Track progress" className={styles.featureImage} />'
    )
]

for pattern, replacement in replacements:
    content = re.sub(pattern, replacement, content)

with open('src/pages/Platform/index.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
