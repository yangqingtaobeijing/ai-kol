#!/bin/bash
set -e

echo "🔨 构建..."
npm run build

echo "🚀 部署到 GitHub Pages..."
npx gh-pages -d dist --dotfiles

echo "✅ 部署完成！"
echo "🌐 https://yangqingtaobeijing.github.io/ai-kol/"
