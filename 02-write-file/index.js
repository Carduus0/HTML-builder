const fs = require("fs");
const path = require("path");
const { stdin, stdout, exit } = require("process");
let textFile = path.join(__dirname, "text.txt");
const output = fs.createWriteStream(textFile);
stdout.write("Введите текст\n");
process.stdin.setEncoding("utf8");
stdin.on("data", (data) => {
  if (data.trim() === "exit") {
    sayBye();
  }

  output.write(data);
});
process.on("SIGINT", sayBye);
function sayBye() {
  stdout.write("Удачи в изучении Node.js!");
  exit();
}
