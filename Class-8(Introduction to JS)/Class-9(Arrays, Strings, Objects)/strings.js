let str = "Hello Hello World"
let str2 = "Goodbye World"

//replace
let text1 = str.replace("Hello", "Namaste")
console.log(text1)

//replaceAll
text1 = str.replaceAll("Hello", "Namaste")
console.log(text1)

//toUpperCase
text1 = str.toLowerCase()
console.log(text1)

//toLowerCase
text1 = str.toUpperCase()
console.log(text1)


//concat
let Rakesh = "Rakesh"
let greeting = "Hello, "
console.log(greeting.concat(Rakesh))

//reversing a string
let returnArray = ''
let splitArray = Rakesh.split('')
splitArray = splitArray.reverse()
for(let i = 0; i < splitArray.length; i++){
    returnArray = returnArray.concat(splitArray[i])
}
console.log(returnArray)