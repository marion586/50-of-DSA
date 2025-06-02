var kthGrammar = function(n, k) {
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

kthGramar(2 , 2)