let nums = [1, 2, 3, 4, 5]

//Calculate squares of all these numbers and strore them in an array
function CalculateSquares(arr){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(arr[i]*arr[i])
    }
    console.log(result);    
}
CalculateSquares(nums);


//map
function CalculateSqaure(num){
    return num*num;
}
let arr = nums.map(CalculateSqaure)
console.log(arr)


//use map method and convert the transactions in dollars
const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500]
const INRToUSD = 84;

const transactionsInUSD = transactions.map(function(INR){return INR/INRToUSD})
console.log(transactionsInUSD)