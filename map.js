const numbers = [2, 3, 6, 8, 9];
const output = [];
for (const number of numbers) {
    const doubled = number * 2;
    output.push(doubled);
}
// console.log(output);
function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubleIt(number);
        output.push(doubled);
    }
    return output;
}

// function doubleItOld(number) {
//     return number * 2;
// }

const doubleIt = num => num * 2;

const makeDouble = numbers.map(doubleIt);
const makeDoubleDirect = numbers.map(num => num * 2);
const makeDouble2 = numbers.map(x => x * 2);
console.log(makeDouble2);

const fiveTimes = [2, 3, 6, 8, 9].map(x => x * 2);
console.log(fiveTimes);
/*
purpose:
1. get an array
2. for every elements of the array do something
3. store the result in an array
4. return the result array
*/

//onsole.log(getDoubles(numbers));