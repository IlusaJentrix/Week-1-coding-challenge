//checks the speed 
const demeritPerKilometer=5

function licenceStatus(speed){
    if (speed <= speedLimit) {
        console.log("Ok");
    } 
    // demerit points calculations
    //here we calculate the demerit points from the exceeeded speed divided by the demerit per kilometer.
    else {    
        const speedOver = (speed - speedLimit);
        const demeritPoints = Math.floor(speedOver / demeritPerKilometer);
        if(demeritPoints > 12){
            console.log('licence suspended')
        }
        else{
            console.log(demeritPoints)
        }
    }}

  //export thefunction to index.js
  module.exports={licenceStatus}