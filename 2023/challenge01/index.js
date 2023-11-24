fs = require("fs");

fs.readFile("./message.txt", "utf8", function (err, data) {
    if (err) {
        return console.log(err);
    }

    data = data.toLowerCase();
    const words = data.split(" ");

    let wordsCount = [];
    for (const word of words) {
        if (typeof wordsCount[word] === "undefined") {
            wordsCount[word] = 1;
        } else {
            wordsCount[word]++;
        }
    }

    let result = "";
    for (const word in wordsCount) {
        result += `${word}${wordsCount[word]}`;
    }

    console.log(result);
});
