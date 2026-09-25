//Function
function greetAndMeet (name) {
    console.log(`Hello ${name}`)
}
greetAndMeet("Gunjan")



function addNumber (number1, number2){
    let total = console.log(number1 + number2)
    return total
}
addNumber(6, 7)




function square (value){
    let power = console.log(value * value)
    return power
}
square(7)




function evenOdd (value){
    if(value % 2 == 0){
        console.log("even number");
        
    }
    else{
        console.log("odd number");
        
    }
}
evenOdd(6)




function isAdult (age){
    if (age >= 18){
        console.log("you are an adult");
        
    }
    else{
        console.log("you are not an adult")
    }
}

isAdult(13)




let userName = "hitesh"
function getLastValue (name, i){
    for(i=(userName.length)-1; i>0; i--){
        let last = console.log(userName[i]);
        return last
    }
}

getLastValue("Gunjan")






function Hello () {
  let name1 = "Gunjan";
  
  function bonjour () {
    let value = console.log(`Bonjour ${name1}`); 
    return value 
  }

bonjour ()
}

