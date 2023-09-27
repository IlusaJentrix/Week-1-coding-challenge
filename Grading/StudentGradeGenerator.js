//this function checks the marks entered and assigns the marks the correct grade
// note that the marks entered is anything between 0and 100
function getGrade(marks){
    if (marks > 0 && marks <= 100) {
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
    } else 

        return "Enter a valid number between 0 and 100"
    }
//export the function to index.js

module.exports={getGrade}