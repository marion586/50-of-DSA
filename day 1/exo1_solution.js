//Methods , complexity Analysis

//Method 1 brute force method

//=== Square each element  &  put it new array

// [-3,1,2,7]
//then [9,1,4,49]
// === Sort the new array


// Time and complexity
// time  O(n)  traversing new array
// time of sorting is O(nlogn)

//then (n + nlogn) => O(nlogn)
// space O(n) for new array
// space O(1) if we sort in place
// space of sorting is O(1) if we sort in place
// space of sorting is O(n) if we sort in new array

// solution 

function sortedSquarredArray(array) {
  let newArray = new Array(array.length).fill(0);
  console.log(newArray);
  for(let i = 0; i < array.length; i++) {
    newArray[i] = array[i] * array[i];
  }
  newArray.sort((a, b) => a - b);
  return newArray;
}

sortedSquarredArray([-3, 1, 2, 7]);

// Methods , complexity Analysis

// Method 2 two pointer method
//[-3, 1, 2, 7]
//one among these 2 largest
//space and time complexity
// Time O(n) traversing  new array
// space O(n)

//answer second method

function sortedSquarredArray(array) {

    const newArray = new Array(array.length).fill(0);
    let pointerLeft = 0;
    let pointerRight = array.length - 1;
    for (let i = array.length - 1; i >= 0; i--) {
        const leftSquared = Math.pow(array[pointerLeft],2)
        const rightSquared = Math.pow(array[pointerRight],2);
        if(leftSquared>rightSquared) {
            newArray[i] = leftSquared;
            pointerLeft++;
        }else {
            newArray[i] = rightSquared;
            pointerRight--;
        }
    }
    return newArray;
}
console.log(sortedSquarredArray([-3, 1, 2, 7]));