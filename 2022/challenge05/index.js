fs = require('fs');

fs.readFile('./usuarios.json', 'utf8', function (err, users) {
    if (err) {
        return console.log(err);
    }

    users = users
        .split(/[,,\n,"]/)
        .filter((element) => element != '' && element != '[' && element != '  ' && element != ']');

    function getWinnerAndIndex(users) {
        let usersWithIndex = users.map((user, index) => `${user}-${index}`);

        while(usersWithIndex.length > 1) {
            const usersLengthIsOdd = usersWithIndex.length % 2 !== 0;

            usersWithIndex = usersWithIndex.filter((user, index) => index % 2 === 0);

            if(usersLengthIsOdd) {
                usersWithIndex.shift();
            }
        }

        return usersWithIndex;
    }

    console.log(getWinnerAndIndex(users));
});
