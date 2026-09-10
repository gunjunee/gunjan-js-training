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




//Number-to-indian currency format
let number = 120000000
  
  
let numberStr = number.toString()
let parts = numberStr.split('.')
let newParts = parts[0]


let newNumberString = ''
let i = 0

  
if (newParts.length > 3) {
  newNumberString = ',' + newParts.substring(newParts.length - 3) + newNumberString
  newParts.length -= 3
  i = 3
}

  
while (newParts.length  > 0) {
  if (newParts.length >= 2) {
    newNumberString = ',' + newParts.substring(newParts.length - 2, newParts.length) + newNumberString
    newParts.length -= 2
    i += 2
  }
} 


console.log(newNumberString);


