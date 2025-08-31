const nums = [45, 5, 12, 78, 10, 681, 69]

//filter all the even numbers in an array
function getEvenNumbers(arr){
    let result = [];
    for(let i = 0; i< arr.length; i++){
        if(arr[i]%2 == 0)
            result.push(arr[i]);
    }
    console.log(result);
}

getEvenNumbers(nums)


//using filter
let EvenNumbersUsingFilter = nums.filter(function(num){ return num%2 == 0})
console.log(EvenNumbersUsingFilter)

//get all the deposits. +ve are doposits, and -ve are withdrawls
const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500]
const deposits = transactions.filter(function(amount){return amount > 0})
console.log(deposits)