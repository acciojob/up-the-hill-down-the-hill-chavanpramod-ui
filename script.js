function aveSpd(upTime, upSpd, downSpd) {
    upTime = Number(upTime);
    upSpd = Number(upSpd);
    downSpd = Number(downSpd);

    let timeUpHours = upTime / 60;
    let distance = upSpd * timeUpHours;
    let timeDownHours = distance / downSpd;
    
    let totalDistance = distance * 2;
    let totalTime = timeUpHours + timeDownHours;

    let averageSpeed = totalDistance / totalTime;

    return parseInt(averageSpeed, 10);
}

// Do not change the code below
const upTime = prompt("Enter upTime: ");
const upSpd = prompt("Enter upSpd: ");
const downSpd = prompt("Enter downSpd: ");

alert(aveSpd(upTime, upSpd, downSpd));