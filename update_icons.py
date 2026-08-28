import re

with open('src/pages/Pricing/index.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Add imports
content = re.sub(
    r"import \{ ChevronDown, ChevronUp \} from 'lucide-react'",
    "import { ChevronDown, ChevronUp, Castle, ChessKnight, Crown } from 'lucide-react'",
    content
)

# Replace Rook
content = re.sub(
    r'icon:\s*\(\s*<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">\s*<path d="M5 20h14v2H5v-2z M7 18h10v-5H7v5z M6 11h12v2H6v-2z M7 5h2v2h2V5h2v2h2V5h2v4H7V5z" />\s*</svg>\s*\)',
    'icon: <Castle size={32} strokeWidth={2} />',
    content
)

# Replace Knight
content = re.sub(
    r'icon:\s*\(\s*<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">\s*<path d="M5 20h14v2H5v-2z M7 18h10V16H7v2z M8 14h8l-1-4-3 1 1-4c0-2-1-3-3-3-2 0-3 1-3 1l-2 3c0 0 1 2 2 3l-1 4z" />\s*</svg>\s*\)',
    'icon: <ChessKnight size={32} strokeWidth={2} />',
    content
)

# Replace Crown
content = re.sub(
    r'icon:\s*\(\s*<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">\s*<path d="M5 20h14v2H5v-2z M7 18h10v-2H7v2z M6 14h12l-2-4 2-5-3 3-3-5-3 5-3-3 2 5-2 4z" />\s*<circle cx="5" cy="5" r="1.2" />\s*<circle cx="12" cy="3" r="1.2" />\s*<circle cx="19" cy="5" r="1.2" />\s*</svg>\s*\)',
    'icon: <Crown size={32} strokeWidth={2} />',
    content
)

with open('src/pages/Pricing/index.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
