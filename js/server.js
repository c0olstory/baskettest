
const http = require('http');
const fs = require("fs");

const server = http.createServer(function (req, res) {
   let body = null;
   try {
      const ext = req.url.split('.')[1];
      if(ext === 'svg') {
         res.setHeader('Content-Type', 'image/svg+xml');
      }
      body = fs.readFileSync(`.${req.url}`)
   } catch (err) {
      body = fs.readFileSync(`./index.html`)
   }
   res.end(body)
});

server.listen(process.env.PORT || 3000)