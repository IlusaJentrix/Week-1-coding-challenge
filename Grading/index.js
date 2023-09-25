const readline=require('readline')
const grading =require('./StudentGradeGenerator')
const getGrade =grading.getGrade
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
rl.question('Enter marks: ',(marks)=>{
    console.log(getGrade(marks));
    rl.close()
})