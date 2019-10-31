// code away!
const server = require('./server');

const port = 5432;

server.listen(port, () => {
  console.log(`\n<<< Service running on port ${port} >>>\n`);
})