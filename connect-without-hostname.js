const net = require("node:net");
const socket = new net.Socket().connect(9000);

socket.on("error", (err) => {
  console.log(err);
});
socket.on("data", (data) => {
  console.log(data.toString());
});
