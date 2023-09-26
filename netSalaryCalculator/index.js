const readLine = require('readline');
const netSalarycalculator = require('./salaryCalculator');
const calculatenetSalary = netSalarycalculator.calculatenetSalary;
const rL = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rL.question('enter basicSalary: ', (userInput) => {
    const basicSalary = parseInt(userInput, 10);
    rL.question('enter benefits: ', (userInput1) => {
        const benefits = parseInt(userInput1, 10);
        console.log(calculatenetSalary(basicSalary, benefits))
        rL.close();
    })
})