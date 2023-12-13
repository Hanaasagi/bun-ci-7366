const net = require("node:net");
const server = net
  .createServer((socket) => {
    socket.end("goodbye\n");
  })
  .on("error", (err) => {
    throw err;
  });

server.listen(9000, "0.0.0.0", () => {
  console.log("listening on", server.address());
});

setTimeout(() => {
  server.close();
}, 10000);
