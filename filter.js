
function filter(arr, func) {
let newArray = []
for(let i = 0; i < arr.length; i++){
    if (func(arr[i]) === true) {
        newArray.push(arr[i])
        }
        
}
return newArray
}
// TEST 1
const numbers = [4, 10, 3, 12, 5, 16, 8, 13, 2, 9, 1, 11, 2]
const filteredNumbers = filter(numbers, x => x < 10)
console.log(filteredNumbers)

// TEST 2 - skriv själv


// TEST 3 - skriv själv
