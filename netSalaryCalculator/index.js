const readLine=require('readline');
const netSalarycalculator=require('./salaryCalculator');
const calculatenetSalary= netSalarycalculator.calculatenetSalary;
const rL=readLine.createInterface({
    input:process.stdin,
    output:process.stdout
});
rL.question('enter basicSalary: ',(userInput)=>{
    const basicSalary=parseInt(userInput,10);
    rL.question('enter benefits' ,(userInput1)=>{
        const benefits = parseInt(userInput1,10);
    })

PAYE(basicSalary,benefits);
NHIFdeductions(basicSalary, benefits);
NSSFdeductions(basicSalary, benefits);

const netPay=calculatenetSalary(basicSalary, benefits)

console.log("Gross salary:",netPay.grossSalary);
console.log("NHIF deductions:",netPay.NHIF);
console.log("NSSF deductions:",netPay.NSSF);
console.log("PAYE deductions:",netPay.payetax);
console.log("Net Salary:",netPay.netSalary);

    rL.close();
})