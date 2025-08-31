let nums = [1, 2, 3, 4, 5, 6]

//Calculte the total sum f the numbers in the arr
function calculateSum(arr){
    let result = 0;
    for(let i = 0; i < arr.length; i++){
        result = result + arr[i];
    }
    console.log(result);
}
calculateSum(nums); 