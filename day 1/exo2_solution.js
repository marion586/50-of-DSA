// [3,-,-,-,-,7] decrease false, non decreasing , array [i]<= array[i+1]
//// [3,-,-,-,-,3] increase true, non increasing , array [i]>= array[i+1]
// [3,3,3,3,3] true, non increasing , array [i]>= array[i+1]

//// [3,-,-,-,-,-5] decrease true,  decreasing ,

//time = O(n) traversing array

const checkMonotonic = function (array) {
    if(array.length === 0 ) return true;
    const first = array[0];
    const last = array[array.length - 1];

    if(first === last) {
        for(let i = 0; i < array.length - 1; i++) {
            if(array[i] !== array[i + 1]) {
                return false;
            }
        }
    }
    else if (first <last) {
            for(let i = 0; i < array.length - 1; i++) {
                if(array[i] > array[i + 1]) {
                    return false;
                }
            }
    }
    else {
        for(let i = 0; i < array.length - 1; i++) {
            if(array[i] < array[i + 1]) {
                return false;
            }
        }
    }
    return true
}

console.log(checkMonotonic([3, 2, 1])); // true
console.log(checkMonotonic([1, 2, 2, 3])); // true
console.log(checkMonotonic([1, 3, 2])); // false
console.log(checkMonotonic([1, 2, 3, 4, 5])); // true
console.log(checkMonotonic([5, 4, 3, 2, 1])); // true
console.log(checkMonotonic([1, 2, 2, 3, 3])); // true
console.log(checkMonotonic([1, 2, 3, 2, 1])); // false
console.log(checkMonotonic([1, 1, 1, 1])); // true
console.log(checkMonotonic([])); // true
console.log(checkMonotonic([1])); // true
console.log(checkMonotonic([1, 2, 3, 4, 5, 5])); // true
console.log(checkMonotonic([5, 5, 5, 5, 4])); // true
console.log(checkMonotonic([1, 2, 3, 2, 3])); // false
console.log(checkMonotonic([3, 3, 3, 3, 3])); // true