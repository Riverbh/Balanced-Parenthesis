// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:

function balancedPar(s){
    let leftside = 0
    let rightside = 0
    for(let i = 0; i < s.length; i++){
        if(s[i] === "(")leftside++ 
        if(s[i] === ")" && leftside > rightside ){rightside++
        }else if(s[i] === ")"){
            return false
        }
        }
    if(leftside === rightside){
        return true
    }else{
        return false
    }


}

console.log(balancedPar("(((())))()"))