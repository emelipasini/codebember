fs = require('fs');

fs.readFile('./colors.txt', 'utf8', function (err, colors) {
    if (err) {
        return console.log(err);
    }

    colors = colors
        .split(/[,, ,"]/)
        .filter((element) => element != '' && element != '[\n' && element != '\n]');

    let count = 0;
    let maxLength = 0;
    let lastColor = "";

    for (let i = 2; i < colors.length; i++) {
        const twoBefore = colors[i - 2];
        const oneBefore = colors[i - 1];
        const color = colors[i];

        if(color !== oneBefore && color === twoBefore) {
            if(count === 0) {
                count = 3
            }
            else {
                count++;
            }

            if(count > maxLength) {
                maxLength = count;
                lastColor = color;
            }
        }
        else {
            count = 0;
        }
    }

    console.log(`Largo maximo: ${maxLength}. Ultimo color: ${lastColor}`);
});
