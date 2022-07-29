git pull
npm version "$1"
npm run build
git add .
git commit -m 'update'
git push -o main

