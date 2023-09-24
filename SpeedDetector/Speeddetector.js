
const speedLimit=70
const demeritPerKilometer=5

function licenceStatus(speed){
    if (speed <= speedLimit) {
        console.log("Ok");
    } 
    else {    
        const speedOver = (speed - speedLimit);
        const demeritPoints = Math.floor(speedOver / demeritPerKilometer);
        if(demeritPoints > 12){
            console.log('licence suspended')
        }
        else{
            console.log(demeritPoints)
        }
    }
}

  
  module.exports={licenceStatus}