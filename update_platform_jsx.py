import re

with open('src/pages/Platform/index.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

def get_callouts(title, items, summary):
    cards = ""
    for idx, item in enumerate(items, 1):
        bold_text, desc_text = item.split(":", 1)
        cards += f"""
                      <div className={{styles.calloutCard}}>
                        <div className={{styles.calloutNum}}>{idx}</div>
                        <div className={{styles.calloutText}}>
                          <strong>{bold_text.strip()}</strong>
                          <span>{desc_text.strip()}</span>
                        </div>
                      </div>"""
    
    return f"""
              <div className={{styles.featureVisual}}>
                <div className={{styles.visualStack}}>
                  <div className={{styles.placeholderImage}}>
                    <ImageIcon size={{48}} />
                    <span>{title}<br/>(Image coming soon)</span>
                  </div>
                  <div className={{styles.calloutSection}}>
                    <div className={{styles.calloutCards}}>{cards}
                    </div>
                    <div className={{styles.calloutSummary}}>{summary}</div>
                  </div>
                </div>
              </div>"""

replacements = [
    (
        r'<div className=\{styles.featureVisual\}>\s*<div className=\{styles.placeholderImage\}>\s*<ImageIcon size=\{48\} />\s*<span>Interactive board<br/>\(Image coming soon\)</span>\s*</div>\s*</div>',
        get_callouts("Interactive board", ["Interactive Board: Try moves and explore concepts live.", "Coach Controls: Teachers guide the position in real-time.", "Live Arrows: Visualise threats and ideas easily.", "Hands-on: Direct interaction on the board."], "Active participation, not just passive watching.")
    ),
    (
        r'<div className=\{styles.featureVisual\}>\s*<div className=\{styles.placeholderImage\}>\s*<ImageIcon size=\{48\} />\s*<span>Position analysis<br/>\(Image coming soon\)</span>\s*</div>\s*</div>',
        get_callouts("Position analysis", ["Variations Tree: See every branching possibility.", "Engine Evaluation: Understand if a move is good or bad.", "Position Editor: Set up specific scenarios instantly.", "Highlights: Key squares and paths illuminated."], "Break down complex positions into clear concepts.")
    ),
    (
        r'<div className=\{styles.featureVisual\}>\s*<div className=\{styles.placeholderImage\}>\s*<ImageIcon size=\{48\} />\s*<span>Puzzle<br/>\(Image coming soon\)</span>\s*</div>\s*</div>',
        get_callouts("Puzzle", ["Tactical Puzzles: Solve game-like scenarios.", "Puzzle Rating: Adjusts to the student's exact skill level.", "History Tracking: See improvement over time.", "Pattern Drill: Repeat key themes until mastered."], "Sharpen skills with adaptive challenges.")
    ),
    (
        r'<div className=\{styles.featureVisual\}>\s*<div className=\{styles.placeholderImage\}>\s*<ImageIcon size=\{48\} />\s*<span>Live game<br/>\(Image coming soon\)</span>\s*</div>\s*</div>',
        get_callouts("Live game", ["Live Clock: Learn time management under pressure.", "Opponent Matching: Play against peers of similar strength.", "Move Input: Practice precise board control.", "Game Log: Record of every move played."], "Apply lessons in a real competitive environment.")
    ),
    (
        r'<div className=\{styles.featureVisual\}>\s*<div className=\{styles.placeholderImage\}>\s*<ImageIcon size=\{48\} />\s*<span>Analysis board<br/>\(Image coming soon\)</span>\s*</div>\s*</div>',
        get_callouts("Analysis board", ["Move History: Review the game move by move.", "Position Evaluation: Understand how the position changes.", "Variations: Explore alternative possibilities.", "Game Review: Identify important moments."], "Understand the game beyond the result.")
    ),
    (
        r'<div className=\{styles.featureVisual\}>\s*<div className=\{styles.placeholderImage\}>\s*<ImageIcon size=\{48\} />\s*<span>Tournament<br/>\(Image coming soon\)</span>\s*</div>\s*</div>',
        get_callouts("Tournament", ["Tournament Standings: See live rankings and scores.", "Pairing System: Automatic match-ups each round.", "Live Spectating: Watch other students' games unfold.", "Leaderboard: Track points and progress."], "Experience the thrill of real competition.")
    )
]

for pattern, replacement in replacements:
    content = re.sub(pattern, replacement, content)

with open('src/pages/Platform/index.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
