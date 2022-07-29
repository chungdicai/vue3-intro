git pull
npm version 3.0.0
npm run build
git add .
git commit -m 'update'
git push -o main

cp -R dist/ /var/www/html

