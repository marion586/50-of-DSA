function sortedSquarredArray(array){
    //write code here.make sure to return desired array
    if(!array.length) return array
    else {
        return array.map(i=> Math.abs(i*i)).sort((a ,b)=> a-b)
    }
    
}
