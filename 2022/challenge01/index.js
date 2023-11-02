fs = require('fs');

fs.readFile('./users.txt', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }

    const users = data.split("\n\n");

    let count = 0;
    for(const user of users){
        const username = user.includes("usr");
        const email = user.includes("eme");
        const password = user.includes("psw");
        const age = user.includes("age");
        const followers = user.includes("fll");

        if(username && email && password && age && followers){
            console.log(user + "\n\n");
            count++;
        }
    }
    console.log(count);
});
