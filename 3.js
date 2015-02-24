// 3 - Basic: Map

function doubleAll (numbers) {
    var result = [];
    numbers.map(function (num) {
        result.push(num * 2);
    });
    return result;
}

// Official solution
// function doubleAll(numbers) {
//         return numbers.map(function double(num) {
//         return num * 2;
//     });
// }

// Note: still don't understand returning functions...s

module.exports = doubleAll;
