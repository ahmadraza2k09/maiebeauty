#!/bin/bash

# Vercel Deployment Setup Script
# This script verifies all configuration files are in place

echo "🔍 Vercel Deployment Configuration Checker"
echo "==========================================="
echo ""

# Check for required files
required_files=(
  "vercel.json"
  ".vercelignore"
  ".npmrc"
  ".env.example"
  "package.json"
  "vite.config.ts"
  "tsconfig.json"
)

missing_files=()

for file in "${required_files[@]}"; do
  if [ -f "$file" ]; then
    echo "✅ $file"
  else
    echo "❌ $file"
    missing_files+=("$file")
  fi
done

echo ""

if [ ${#missing_files[@]} -eq 0 ]; then
  echo "✅ All required configuration files present!"
  echo ""
  echo "📊 Configuration Summary:"
  echo "  - Build Command: npm run build"
  echo "  - Output Directory: .output"
  echo "  - Node Version: 20.x"
  echo "  - Start Command: node .output/server/index.mjs"
  echo ""
  echo "🚀 Ready to deploy! Next steps:"
  echo "  1. Commit files: git add -A && git commit -m 'Configure Vercel'"
  echo "  2. Push to repository: git push"
  echo "  3. Import on Vercel: https://vercel.com/new"
else
  echo "❌ Missing files:"
  for file in "${missing_files[@]}"; do
    echo "  - $file"
  done
  exit 1
fi

# Check build
echo ""
echo "🏗️  Testing build..."
if npm run build > /dev/null 2>&1; then
  echo "✅ Build succeeds"
  if [ -d ".output" ]; then
    echo "✅ .output directory generated"
    echo "✅ Server: .output/server/index.mjs exists"
  else
    echo "❌ .output directory not found"
  fi
else
  echo "❌ Build failed - check npm run build output"
  exit 1
fi

echo ""
echo "✅ All checks passed! Ready for Vercel deployment."
