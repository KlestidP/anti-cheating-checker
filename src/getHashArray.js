function endOfWord(char) {
    return char === ',' || char === ';' || char === ' ' || char === '{' || char === '}' || char === '\n' || char == '<' || char == '>' || char == '(' || char == ')' || char == ':';
}

function gettingHashArray(code) {
    const words = [];
    let curHash = 0;
    const p = 31;
    let numberOfInclusions = 0
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
        if (i !== code.length - 2) {
            if (code[i] == 's' && code[i + 1] == 't' && code[i + 2] == 'd') {
                i += 2
                continue
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
        if (code[i] === '{' || code[i] === '}') {
            if (!comment && !library) {
                if (code[i] === '{') numberOfInclusions += 1
                else numberOfInclusions -= 1
            }
        }
        if (!library && !comment && !endOfWord(code[i]) && numberOfInclusions !== 0) {
            curHash *= p;
            curHash += code[i].charCodeAt(0);
        } else if (!library && !comment && numberOfInclusions !== 0) {
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