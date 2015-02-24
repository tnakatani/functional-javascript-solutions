// 6 - Basic: Reduce

function countWords (inputWords) {
    // .reduce(function(previousValue, currentValue)
    return inputWords.reduce(function (countMap, word) {
        countMap[word] = ++countMap[word] || 1;
        return countMap;
    }, {}); // initialize countMap to {}
}

module.exports = countWords;

// I have no idea!!!

// Official Solution
// function countWords(arr) {
//     return arr.reduce(function(countMap, word) {
//         countMap[word] = ++countMap[word] || 1; // increment or initialize to 1
//         return countMap;
//     }, {}); // second argument to reduce initialises countMap to {}
// }