const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Node.js Web Application</title>
    </head>

    <body>
      <h1>Welcome to Node.js Web Application</h1>
      <h2>Sahil Patil</h2>

      <p><strong>Branch:</strong> Computer Science & Engineering</p>
      <p><strong>Technology:</strong> Node.js</p>

      <p>This webpage is created using the Node.js HTTP module.</p>
    </body>
    </html>
  `);

    res.end();
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});