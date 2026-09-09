// String Formation
// String
let str1 = "gunjan"
console.log(str1);


// String (template literals)
let str2 = `my name is ${str1}`
console.log(str2);


// Multiline string
let str3 = `
            Heyy
            gunjan this side `

console.log(str3);


//length of string
let lengthOfStr1 = str1.length 
console.log(lengthOfStr1);


// Merge
let firstName = "Gunjan"
let secondName = " Suthar"
let fullName = firstName + secondName
console.log(fullName);


//Uppercase 
let capital = firstName.toUpperCase ()
console.log(capital);


//Lowercase
let small = firstName.toLowerCase ()
console.log(small);



//Substring
let subStr = str1.substring(3, 6)
console.log(subStr);


//trim
let spaceString = "         space             "
let trimmedString = spaceString.trim ()
console.log(trimmedString);


//slice
let str4 = "Technology"
let newStr = str4.slice(2, 6)
console.log(newStr);



//Starts with (position is checked)
let starting = str4.startsWith("T", 0)
console.log(starting);


//Ends with (same)
let ending = str4.endsWith("y", 8)
console.log(ending);




//Type checking puzzle
let userInput = "120000"
let str = ""
let count = 0
for (let i = userInput.length-1;i>=0; i--){
    str = userInput[i] + str
    count++

    if (i > 0){
        if (count === 3){
            str = "," + str
        }

         else if (count > 3 &&(count-3)%2 == 0){
            str = "," + str
        }
        
    }
    
    
}

