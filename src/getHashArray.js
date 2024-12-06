function endOfWord(char) {
    return char === ',' || char === ';' || char === ' ' || char === '{' || char === '}' || char === '\n';
}

function gettingHashArray(code) {
    const words = [];
    let curHash = 0;
    const p = 31;
    for (let i = 0; i < code.length; i++) {
        if (!endOfWord(code[i])) {
            curHash *= p;
            curHash += code[i].charCodeAt(0);
        } else {
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