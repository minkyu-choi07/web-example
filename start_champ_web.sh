#!/usr/bin/env bash
# ─────────────────────────────────────────────
#  start_champ_web.sh
#  One-command launcher for the ChaMP product site
# ─────────────────────────────────────────────
set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$SCRIPT_DIR/champ-web"

echo ""
echo "  ╔═══════════════════════════════════════════╗"
echo "  ║   ChaMP — Product Web                     ║"
echo "  ║   Chat-enabled Multi-Agentic Mission       ║"
echo "  ║   Platform                                 ║"
echo "  ╚═══════════════════════════════════════════╝"
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
  echo "  ✗  Node.js not found. Please install Node 20+."
  echo "     https://nodejs.org/"
  exit 1
fi

NODE_VER=$(node -v | sed 's/v//' | cut -d. -f1)
echo "  ✓  Node.js v$(node -v | sed 's/v//')"

if [ "$NODE_VER" -lt 18 ]; then
  echo "  ✗  Node 18+ is required (20 recommended). Found v$NODE_VER."
  exit 1
fi

# Navigate to project
cd "$PROJECT_DIR"

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo "  →  Installing dependencies..."
  npm install --loglevel=error
  echo "  ✓  Dependencies installed"
else
  echo "  ✓  Dependencies already installed"
fi

# Start dev server
echo ""
echo "  →  Starting dev server..."
echo "  →  Open http://localhost:3000 in your browser"
echo ""

npx next dev
