*** 14 Days JavaScript Training Program ***


*** Day-1 ***

variables - var, let, const
var = global scoped variable, redeclare allow, can be initialized with undefined
let = block scoped, update allowed, redeclare not allowed, can not be initialized with undefined
const = block scoped, update not allowed, redeclare not allowed, can not be initialized with undefined

datatypes - primitive and non-primitive
primitive = number, string, symbol, bigInt, boolean, null(empty), undefined (not defined)
non-primitve = object(key:value)

operators - 
arithmetic = +,-,/,*,^
logical = &&, ||, !
assignment = +=, =, -= etc
comparison = ==, ===, >=, <=, >, <

ternary operator-
evaluate condition -> execute block of code 
ex. (age>=18)? 'adult': 'minor'

type coercion -
== compare values
=== compare and also check data type

truthy and falsy values -
truthy = non-empty strings, non-zero numbers, array, undefined, NaN
falsy = null, zero, empty strings

short-circuit - behavior occurs by logical operators
                if first operand can determine output then second operand isnt worth 

&& = if any found false returns false value
|| = if any found true returns true value
?? = if found null/undefined then return it 





*** Day-2 ***

arrow func -  func((element) => {})

closures - funtion combined with lexical environment
         - can access values outside their block
         - stores in heap memory


scope - accessibility of variable
hoisting - assigning a variable on very top of the code

higher order function - function in function(nested)



*** Day-3 ***

map() = operates a func on each element and returns new array
forEach() = execute a func on each element , returns undefined
filter() = every element goes through a condition whoever passes return with the new array
some() = check if even one element fulfill the condition
every() = check if every elements are fulfilling the condition
find() = return first element after fulfilling the condition
findIndex() = find index
sort() = reorder in ascending/decending
reduce() = returns a single value (like total etc)

chaining methods - means using one method after another 
ex. .map().reduce

* for real world projects or bigger projects , mutating source array will only occur problems , like the results would be diffrent 




*** Day-4 ***


nested object = object in and object 
accessing = by '.'
            ex. obj.objx.objy
optional chaining = checks if objx in obj exist or not
                    obj.objx?.objy

nullish coalescing = if the value is null/undefined it will intead provide a default value


* deconstructing - means taking value and properties from array and object , then these values in local variable
                 - can also be done with loops and func

spread - take values FROM object and copies them into new object
       - kinda like copy paste

rest - collect rest or remainig elements


object.keys - gives an array of object's key property
object.values - gives an array of object's value property
object.entries - gives an array of object's key:value property


JSON.parse - convert JSON string into js object
JSON.stringify - convert js object into JSON string





*** Day-5 ***

ES modules - import, export
* export - make js file available so that user can import that file's func etc 
* import - used in new file to import those func etc into this file

* class - template to create object 
        - func under class are called methods 


* methods - getter and setter
getter = to get value of property(readable)
setter = to modify value of property(writable)
this = current/this obj



map - stores data in key:value pair, and uses methods like .set(modify/add value) and .get(shows key)
set - stores data in value , uses method like .add(to add value)




*** Day-6 ***

try/catch/finally - handles error
                  - kinda like if else, try block probably has error if yes then catch block will execute , and finally block will execute no matter what 

* throw lets you throw an error
* you can make your own kind of error using class
console.table() = shows output in a tabular form
console.group() = organize in a group 
console.time () = shows how much of time it will take to execute