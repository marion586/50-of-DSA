// 0
// 01
// 0110
// 01101001

//notice that the question itself is defined recursively 

//recursion

// ==> base case (last valid || first valid) input
// ==> Recurrence relation


//express the solution of a problem as a function of the solutions to smaller instances of the same problem

//let's make some observations

//nth row first half is same as previous row
//nth row second half is not of previous row

//sumarize:

//base case: if n == 1, return 0

//n = 4 , k=7)
//length of row 4 is 8 = 2^n-1 , mid = 4


// javascript solution 



var kthGrammar = function(n, k) {


    //write code here 
    //0
    //01
    //0110
    // 01101001

    //Base case
    if (n === 1) {
        return 0;
    }

    //recurrence relation or recursive case
    let lengthOfRow = Math.pow(2, n - 1);
    let mid = lengthOfRow / 2;
    if (k <= mid) {
        return kthGrammar(n - 1, k);
    } else {
        return 1 - kthGrammar(n - 1, k - mid);
    }
}