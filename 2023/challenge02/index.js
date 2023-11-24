fs = require("fs");

fs.readFile("./message.txt", "utf8", function (err, data) {
    if (err) {
        return console.log(err);
    }

    let count = 0;
    let result = "";
    for (const letter of data) {
        if (letter === "#") {
            count++;
        } else if (letter === "@") {
            count--;
        } else if (letter === "*") {
            count = count * count;
        } else if (letter === "&") {
            result += count;
        }
    }

    console.log(result);
});
