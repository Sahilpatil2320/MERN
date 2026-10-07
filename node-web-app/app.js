const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Node.js Web Application</title>

      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        body {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #667eea, #764ba2);
          padding: 20px;
        }

        .container {
          width: 100%;
          max-width: 650px;
          background: white;
          border-radius: 20px;
          padding: 40px;
          text-align: center;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
        }

        .icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 20px;
          border-radius: 50%;
          background: #333;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          font-weight: bold;
        }

        h1 {
          color: #222;
          margin-bottom: 10px;
          font-size: 32px;
        }

        .subtitle {
          color: #666;
          font-size: 17px;
          margin-bottom: 30px;
        }

        .info {
          text-align: left;
          background: #f7f7f7;
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 25px;
        }

        .info p {
          margin: 12px 0;
          color: #444;
          font-size: 16px;
        }

        .info strong {
          color: #333;
        }

        .tech {
          display: inline-block;
          background: #667eea;
          color: white;
          padding: 8px 18px;
          border-radius: 20px;
          margin: 5px;
          font-size: 14px;
        }

        .message {
          color: #555;
          line-height: 1.6;
          margin: 20px 0;
        }

        .footer {
          margin-top: 25px;
          padding-top: 20px;
          border-top: 1px solid #ddd;
          color: #888;
          font-size: 14px;
        }
      </style>
    </head>

    <body>

      <div class="container">

        <div class="icon">N</div>

        <h1>Node.js Web Application</h1>

        <p class="subtitle">
          Welcome to my Node.js web-based application
        </p>

        <div class="info">
          <p><strong>Name:</strong> Sahil Patil</p>
          <p><strong>Branch:</strong> Computer Science & Engineering</p>
          <p><strong>Project:</strong> Web Based Node.js Application</p>
        </div>

        <div>
          <span class="tech">Node.js</span>
          <span class="tech">HTTP Module</span>
          <span class="tech">HTML</span>
          <span class="tech">CSS</span>
        </div>

        <p class="message">
          This webpage is created using the built-in Node.js
          <strong>HTTP module</strong> without using any external framework.
        </p>

        <div class="footer">
          Experiment 5 | MERN Stack Lab
        </div>

      </div>

    </body>
    </html>
  `);

    res.end();
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});