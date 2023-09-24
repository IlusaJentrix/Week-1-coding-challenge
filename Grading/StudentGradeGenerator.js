const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
function getGrade(marks){
    if (marks > 79) {
        return "A";
        
    } else if(marks >=60 && marks <= 79){
        return "B";
    }
    else if(marks >=49 && marks <= 59){
        return "C";
    }
    else if(marks >=40 && marks <= 49){
        return "D";
    }
    else{
        return "E";
    }
}

readline.question('Enter your marks: ', marks => {
    if(isNaN(marks) || marks < 0 || marks > 100){
        console.log("Enter a valid number between 0 and 100")
    }
    else{
        console.log(getGrade(marks))
    }
    readline.close();
  });
  