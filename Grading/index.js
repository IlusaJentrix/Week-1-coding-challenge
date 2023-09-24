const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });


readline.question('Enter your marks: ', marks => {
    if(isNaN(marks) || marks < 0 || marks > 100){
        console.log("Enter a valid number between 0 and 100")
    }
    else{
        console.log(getGrade(marks))
    }
    readline.close();
  });