// Assembles index.html from tools/ parts: node tools/build.js
const fs=require('fs'),p=f=>fs.readFileSync(__dirname+'/'+f,'utf8');
const head=`<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Aqua Premium Foods — B2B &amp; Wholesale Canned and Frozen Foods</title>
<meta name="description" content="Aqua Premium Foods — HACCP-certified canned tuna, legumes, vegetables and frozen foods for retailers, distributors and restaurants. Wholesale orders from 50 cartons, private label, Cairo &amp; Dubai.">
<meta name="theme-color" content="#07183A">
<link rel="icon" type="image/png" href="assets/img/favicon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
`;
const js=p('app.js').replace('/*MAP*/',p('map.js').trim());
fs.writeFileSync(__dirname+'/../index.html',head+p('base.css')+p('extra.css')+'</style>\n</head>\n'+p('body.html')+'\n<script>\n'+js+'</script>\n</body>\n</html>\n');
console.log('built',fs.statSync(__dirname+'/../index.html').size);
