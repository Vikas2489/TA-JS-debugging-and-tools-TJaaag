``
`js

function getFullName(firstName, lastName){
  return firstName + " " + lastName;    
}   

let output = getFullName();

if(output !== getFullName()){
    throw new Error("not equal");
}


if(output === getFullName()){
    throw new Error("not equal");
}
`
``


``
`js
function totalAmount(amount, taxrate){
    return amount + taxrate;
}

let result = totalAmount();

if(result  !== totalAmount()){
    throw new Error("not equal")
}

if(result  === totalAmount()){
    throw new Error("equal")
}
`
``