fs = require("fs");

fs.readFile("./encryption_policies.txt", "utf8", function (err, data) {
    if (err) {
        return console.log(err);
    }

    const passwords = data.split("\n");

    findSpecificPassword(passwords, 13);
    findSpecificPassword(passwords, 42);
    findSpecificPassword(passwords, 10, (isCorrect = true));
});

function findSpecificPassword(passwords, index, isCorrect = false) {
    let count = 0;

    for (const password of passwords) {
        const [min, max, letter, key] = password.split(/-|\s|: /);

        const letterCount = key.split(letter).length - 1;

        if (letterCount >= min && letterCount <= max) {
            if (isCorrect === true) {
                count++;
            }
        } else {
            if (isCorrect === false) {
                count++;
            }
        }

        if (count === index) {
            console.log(`Is correct: ${isCorrect}, Number: ${count}, Key: ${key}`);
            break;
        }
    }
}
