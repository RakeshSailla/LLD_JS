let arr = [1, true, null, 'Hello']
console.log(arr)

let cars = ["Ford", "Tata", "Mahindra"]
console.log(cars)

//length
console.log(cars.length)

//Array methods:
//.push
cars.push('Maruti Suzuki')
console.log(cars)

//.pop
cars.pop()
console.log(cars)

//unshift
cars.unshift('Volkwagen')
console.log(cars)

//shift
cars.shift()
console.log(cars)

//includes
console.log(cars.includes("BMW"))

//indexOf
console.log(cars.indexOf("Urus"))


//slice - doesn't modify the original array
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
const sliced = fruits.slice(3, 4);
console.log(sliced);


//splice - delete the items in array, so it does modifies the original array
const spliced = fruits.splice(2, 1)
console.log(spliced)
console.log(fruits)