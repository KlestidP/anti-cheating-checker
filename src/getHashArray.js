function endOfWord(char) {
    return char === ',' || char === ';' || char === ' ' || char === '{' || char === '}' || char === '\n';
}

function gettingHashArray(code) {
    const words = [];
    let curHash = 0;
    const p = 31;
    let library = false;
    for (let i = 0; i < code.length; i++) {
        if (code[i] == '#') {
            library = true
        }
        else if (code[i] == '\n') {
            library = false
        }
        if (!library && !endOfWord(code[i])) {
            curHash *= p;
            curHash += code[i].charCodeAt(0);
        } else if (!library) {
            if (curHash !== 0) {
                words.push(curHash);
            }
            curHash = 0;
        }
    }
    if (curHash !== 0) {
        words.push(curHash);
    }
    return words;
}

export default gettingHashArray;