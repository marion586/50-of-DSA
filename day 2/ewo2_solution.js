var findTheWinner =function(n ,k) {
    //n = 3 ,[1,2,3]
    const arr = Array.from({ length:n} , (_, i) => i + 1);
    function helper(arr, startIndex) {
    
    
    //base case 
    
    if (arr.length === 1) {
        return arr[0];}
    }

    // recursive case
    let indexToRemove = (startIndex + k - 1) % arr.length;
    arr.splice(indexToRemove, 1);
    return helper(arr, indexToRemove);
    }
return helper(arr, 0);
 