const challengeMessage = "11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101";
const emailMessage = "83101 113117105101110 101114101115 84101 9911111011112299111 84117 110111 109101 9911111011199101115 97 109105 84101 101115116111121 1119811510111411897110100111 84101 101115116111121 115105103117105101110100111 81117105101114101115 10611710397114 7411710110397 99111110109105103111 8697108101 8697109111115 97 10611710397114 691061019911711697 101115116101 9911110997110100111 101110 10897 11610111410910511097108 11511798109105116 116561181061045651505752561029911097108";

console.log(`Challenge message: ${decodeMessage(challengeMessage)}`);
console.log(`Email message: ${decodeMessage(emailMessage)}`);

function decodeMessage(message) {
    const words = message.split(" ");
    
    const decodedMessage = words.map((word) => decodeWord(word)).join(" ");
    return decodedMessage;
}

function decodeWord(word) {
    let pointer = 0;
    const letters = [];

    for (let i = 0; i < word.length; i++) {
        if(word[pointer] === "1") {
            letters.push(word.slice(pointer, pointer + 3));
            pointer = pointer + 3;
        }
        if(Number(word[pointer]) >= 3 && Number(word[pointer]) <= 9) {
            letters.push(word.slice(pointer, pointer + 2));
            pointer = pointer + 2;
        }
    }

    const decodedWord = letters.map((letter) => String.fromCharCode(letter)).join("");
    return decodedWord;
}
