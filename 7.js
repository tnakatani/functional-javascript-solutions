// Basic: Recursion

function reduce (arr, fn, obj) {
    if (!arr.length) return obj;

    obj[arr[0]] = ++obj[arr[0]] || 1;

    return reduce(arr.slice(1), fn, obj);
}
module.exports = reduce;

// Official Solution
function reduce(arr, fn, initial) {
    return (function reduceOne(index, value) {
        if (index > arr.length - 1) return value; // end condition
        return reduceOne(index + 1, fn(value, arr[index], index, arr)); // calculate & pass values to next step
    })(0, initial); // IIFE. kick off recursion with initial values
}