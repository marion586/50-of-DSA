const kthGrammar = function(n, k) {
    //Write code here
    //if n == 1 == return 0
    //else
    //n==
    //0
    //01
    //0110
    //01101001
    let inputs = []
    for (let i =0; i<n; i++) {
        if(!inputs.length) {
            inputs.push("0")
        }
        else {
            const lastElement =inputs[inputs.length-1].split('')
            let elementToAdd = ""
            for (let j =0; j<lastElement.length; j++) {
                if(lastElement[j] =="0") {
                    elementToAdd +="01"
                }
                else {
                    elementToAdd +="10"
                }
            }
            inputs.push(elementToAdd)
        }
    }
    return parseInt(inputs[n-1].split("")[k-1])
};




const kthGramarRecc = (n, k) => {
    if (n === 1) {
        return 0;
    }
   const mid = Math.pow(2, n-1) /2;
    if(k <=mid){
        return kthGramarRecc(n-1, k);
    }
    else {
        return 1 -kthGramarRecc(n-1, k-mid)
    }

}

console.log(kthGramarRecc(2, 2)); // Output: 1
console.log(kthGramarRecc(4, 5)); // Output: 1
console.log(kthGramarRecc(3, 3)); // Output: 1
console.log(kthGramarRecc(1, 1)); // Output: 0
console.log(kthGramarRecc(5, 10)); // Output: 0
console.log(kthGramarRecc(6, 20)); // Output: 1
console.log(kthGramarRecc(7, 50)); // Output: 0
console.log(kthGramarRecc(8, 100)); // Output: 1

console.log("not recursive", kthGrammar(2, 2)); // Output: 1
console.log("not recursive", kthGrammar(4, 5)); // Output: 1
console.log("not recursive", kthGrammar(3, 3)); // Output: 1
console.log("not recursive", kthGrammar(1, 1)); // Output: 0
console.log("not recursive", kthGrammar(5, 10)); // Output: 0
console.log("not recursive", kthGrammar(6, 20)); // Output: 1
console.log("not recursive", kthGrammar(7, 50)); // Output: 0
console.log("not recursive", kthGrammar(8, 100)); // Output: 1