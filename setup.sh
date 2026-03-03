#!/bin/bash

# Yin-Yang Portfolio - Setup Script
# ==================================

echo "🎨 Setting up your Yin-Yang Portfolio..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js $(node --version) detected"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🚀 Your portfolio is ready! Run these commands:"
    echo ""
    echo "   npm run dev      # Start development server"
    echo "   npm run build    # Build for production"
    echo "   npm run start    # Start production server"
    echo ""
    echo "📖 Visit http://localhost:3000 after running 'npm run dev'"
    echo ""
    echo "⚡ Key customization points:"
    echo "   - app/page.tsx: Update personal info and projects"
    echo "   - lib/animations.ts: Modify animation effects"
    echo "   - tailwind.config.ts: Adjust color palette"
    echo ""
    echo "📚 See README.md for detailed documentation"
else
    echo ""
    echo "❌ Installation failed. Please check the error messages above."
    exit 1
fi
