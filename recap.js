//1. var let const
//brak up with var
const number = [12, 546, 45, 98];
let salary = 450;
salary = 455;

// 2. default parameters
function calculateSalary(salary, tax = 0.25, bonus = 0) {
    const remaining = salary - salary * tax;
    const total = remaining + bonus;
    return total;
}

// 3. Template string
const elementHTML = `
<div>
<h3>Name: </h3>
<p>Address: </p>
<p>Salary: ${calculateSalary(10000, 0, 0)} </p>
<p>Others: ${number[2]}</p>

`

// Arrow Function
const doubleIt = x => x * 2;
const calculateSalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;

// 5.Spread
const ages = [11, 35, 65, 24, 12, 67];
const newAge = [...ages, 22, 43, 67];

// destructuring
const { x, y, ...c } = { x: 45, y: 12, z: 33, name: 'Shakib Al HAsan', salary: 2466799 };