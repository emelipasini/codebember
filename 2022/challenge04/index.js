const possibleNumbers = [];

for (let i = 11155; i <= 99955; i++) {
    const stringIndex = i.toString();

    const digit1 = stringIndex[0];
    const digit2 = stringIndex[1];
    const digit3 = stringIndex[2];
    const digit4 = stringIndex[3];
    const digit5 = stringIndex[4];

    if(digit1 <= digit2 && digit2 <= digit3 && digit3 <= digit4 && digit4 <= digit5) {
        if(stringIndex.includes("55")) {
            possibleNumbers.push(stringIndex);
        }
    }
}

console.log(`Posibilidades: ${possibleNumbers.length}. Caso 55: ${possibleNumbers[55]}`);
