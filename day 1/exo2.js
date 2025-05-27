
// Coding Exercise: Monotonic Array
// Question

// An array is monotonic if it is either monotone increasing or monotone decreasing. An array is monotone increasing if all its elements from left to right are non-decreasing. An array is monotone decreasing if all  its elements from left to right are non-increasing. Given an integer array return true if the given array is monotonic, or false otherwise.

const checkMonotonic = function (array){
    //write code here to return either true or false 
    if(!array.length || array.length == 1) return true
    else {
        let val = array[0]
        let type = array[1] >= val ? "increase": "decrease"
        for (let i=1; i<array.length; i++) {
            if(type =="increase") {
                if(val <= array[i]){
                    val = array[i]
                }
                else {
                    return false
                }
            }
            else {
                if(val >= array[i]){
                    val = array[i]
                }
                else {
                    return false
                }
            }
        }
        return true
    }
}

