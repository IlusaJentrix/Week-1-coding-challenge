
const readLine=require('readline')
const SpeedDetector=require('./Speeddetector')
const speedl=SpeedDetector.licenceStatus
const rL=readLine.createInterface({
    input:process.stdin,
    output:process.stdout
});
rL.question('enter speed ',(speed)=>{
    speedl(speed)
    rL.close();
})