import gettingHashArray from './getHashArray.js';

function findLCS(first, second) {
    const dp = Array.from({ length: first.length + 1 }, () => Array(second.length + 1).fill(0));
    let ans = 0;
    for (let i = 0; i <= first.length; i++) {
        for (let j = 0; j <= second.length; j++) {
            ans = Math.max(ans, dp[i][j]);
            if (i < first.length && j < second.length) {
                if (first[i] === second[j]) {
                    dp[i + 1][j + 1] = Math.max(dp[i + 1][j + 1], dp[i][j] + 1);
                } else {
                    dp[i + 1][j] = Math.max(dp[i + 1][j], dp[i][j]);
                    dp[i][j + 1] = Math.max(dp[i][j + 1], dp[i][j]);
                }
            } else {
                if (i < first.length) {
                    dp[i + 1][j] = Math.max(dp[i + 1][j], dp[i][j]);
                }
                if (j < second.length) {
                    dp[i][j + 1] = Math.max(dp[i][j + 1], dp[i][j]);
                }
            }
        }
    }
    return ans;
}

function getProbability(first, second) {
    const hFirst = gettingHashArray(first);
    const hSecond = gettingHashArray(second);
    return Math.floor((findLCS(hFirst, hSecond) * 100) / Math.min(hFirst.length, hSecond.length));
}

export default getProbability;