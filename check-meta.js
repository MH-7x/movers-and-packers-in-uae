const http = require('http');

const pages = ['/', '/movers-and-packers-in-dubai', '/about-us', '/get-quote', '/moving-services'];

function fetchPage(path) {
  return new Promise((resolve) => {
    http.get('http://localhost:3000' + path, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const match = data.match(/<meta[^>]*name="description"[^>]*>/i) || data.match(/<meta[^>]*name="description"[^>]*>/i);
        resolve({ path, found: !!match, tag: match ? match[0] : 'None' });
      });
    }).on('error', () => resolve({ path, found: false, tag: 'Error fetching' }));
  });
}

Promise.all(pages.map(fetchPage)).then(results => {
  console.log(JSON.stringify(results, null, 2));
});
