
// spread operator
const combineTwoArr = [1, 2, 3];
const arr = [...combineTwoArr, 4, 5, 6];
console.log(arr); 


// rest operator
console.log('below rest parameter result')
function multiply (...numbers) {
    return numbers.reduce((total, num) => total * num, 1);
}

console.log(multiply (1, 2, 3));
