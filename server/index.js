const http = require('http'); // import Node.js core module

const host = 'localhost'; // Localhost
const port = 8000; // Port number

//กำหนด listener ให้กับ server เมื่อเปิด server จะทำงานตาม function ที่กำหนด
const requirelListener = function (req, res) {
  res.writeHead(200);
  res.end('My first server!');
}

const server = http.createServer(requirelListener); 
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});