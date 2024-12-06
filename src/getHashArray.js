function endOfWord(char) {
    return char === ',' || char === ';' || char === ' ' || char === '{' || char === '}' || char === '\n';
}

function gettingHashArray(code) {
    const words = [];
    let curHash = 0;
    const p = 31;
    let library = false;
    let multilineComment = false;
    let onelineComment = false;
    for (let i = 0; i < code.length; i++) {
        if (i !== code.length - 1) {
            if (code[i] === '/' && code[i + 1] === '*') {
                multilineComment = true
            }
            else if (code[i] === '*' && code[i + 1] === '/') {
                multilineComment = false
            }
            else if (code[i] === '/' && code[i + 1] === '/') {
                onelineComment = true
            }
        }
        if (code[i] === '#') {
            library = true
        }
        else if (code[i] === '\n') {
            library = false
            onelineComment = false
        }
        const comment = onelineComment | multilineComment
        if (!library && !comment && !endOfWord(code[i])) {
            curHash *= p;
            curHash += code[i].charCodeAt(0);
        } else if (!library && !comment) {
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