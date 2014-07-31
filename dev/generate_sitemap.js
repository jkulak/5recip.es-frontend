#!/usr/bin/env node

/*
 Usage:
 $ node generate_sitemap.js > sitemap.xml
*/

function write_url(value) {
  console.log("<url>\n  <loc>http://5recip.es/#!/list/" + value + "</loc>\n  <lastmod>2014-07-30</lastmod>\n  <changefreq>monthly</changefreq>\n  <priority>0.7</priority>\n</url>");
}

for (var i = 850; i < 950; i++) {
  write_url(i);
}
