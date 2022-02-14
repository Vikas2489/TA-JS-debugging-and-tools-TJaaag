``
`js

function getFullName(firstName, lastName){
  return firstName + " " + lastName;    
}   

let output = getFullName("vikas", "singh"); 
let expected = "vikas singhh"
if(output !== expected){
    throw new Error("not equal");
}

output= getFullName("arya", "strak");
expected = "arya stark";
if(output === expected){
    throw new Error("not equal");
}
`
``


``
`js
function totalAmount(amount, taxrate){
    return amount + taxrate;
}

let result = totalAmount(20,10);
expectedOne = 31
if(result  !== expectedOne){
    throw new Error("not equal")
}

if(result  === expectedOne){
    throw new Error("equal")
}
`
``