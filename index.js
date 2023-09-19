const fs = require("fs");

const filePath = "/etc/hosts";

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const lines = data.split("\n");

  const localhostLines = lines.filter((line) =>
    line.trim().endsWith("localhost"),
  );

  console.log(`/etc/hosts:\n${localhostLines.join("\n")}`);
});
