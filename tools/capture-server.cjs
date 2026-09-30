const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const mediaDir = path.join(root, 'media');
const allowedUploads = new Set([
  'overview.png',
  'reactions.png',
  'circuits.png',
  'sandfall-lab-demo.webm',
]);
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webm': 'video/webm',
};

http.createServer((req, res) => {
  const pathname = new URL(req.url, 'http://127.0.0.1').pathname;
  if (req.method === 'POST' && pathname.startsWith('/__capture/')) {
    const name = path.basename(pathname.slice('/__capture/'.length));
    if (!allowedUploads.has(name)) {
      res.writeHead(404).end('Unknown capture');
      return;
    }
    fs.mkdirSync(mediaDir, { recursive: true });
    const output = fs.createWriteStream(path.join(mediaDir, name));
    req.pipe(output);
    output.on('finish', () => res.writeHead(201).end('Saved'));
    output.on('error', () => res.writeHead(500).end('Could not save capture'));
    return;
  }
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405).end('Method not allowed');
    return;
  }
  const file = path.resolve(root, `.${decodeURIComponent(pathname)}`);
  if (!file.startsWith(root + path.sep) && file !== path.join(root, 'index.html')) {
    res.writeHead(403).end('Forbidden');
    return;
  }
  fs.readFile(file, (error, content) => {
    if (error) {
      res.writeHead(404).end('Not found');
      return;
    }
    res.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream' });
    if (req.method === 'HEAD') res.end(); else res.end(content);
  });
}).listen(8765, '127.0.0.1', () => console.log('Media capture server ready on http://127.0.0.1:8765'));
