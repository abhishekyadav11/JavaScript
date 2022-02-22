let n1 = parseInt(prompt("Enter 1st Number : "));
let n2 = parseInt(prompt("Enter 2nd Number : "));

let Ans = parseInt(divide(n1,n2));

document.write("\n Division Of "+ n1 + " & " + n2 + " = " + Ans);

function divide(){   
        return n1/n2;  
   
}