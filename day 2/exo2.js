var findTheWinner = function(n,k) {
    const arr= Array.from({ length: n }, (_, i) => i + 1);
    return winner(arr,k,0)
}

const winner = function(my_array, k , start) {
    //Write code here
    //n == 1 , k 1
    //n ==2 , 
    if (my_array.length == 1) return my_array[0]; 
    else {
        let remove = [start + k -1]% my_array.length
        let new_array = my_array.filter((item)=> my_array[remove] != item)
        return  winner(new_array , k , remove)
    }
};
findTheWinner(5, 2)
