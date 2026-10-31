function aveSpd(upTime, upSpd, downSpd) {
  // your code here
upTime = Number(upTime);
    upSpd = Number(upSpd);
    downSpd = Number(downSpd);

    let timeUpHours = upTime / 60;
    let distance = upSpd * timeUpHours;
    let timeDownHours = distance / downSpd;
    
    let totalDistance = distance * 2;
    let totalTime = timeUpHours + timeDownHours;

    return totalDistance / totalTime;
}

// Do not change the code below
const upTime = prompt("Enter upTime: ");
const downTime = prompt("Enter downTime: ");
const downSpd = prompt("Enter downSpd: ");

alert(aveSpd(upTime, downTime, downSpd));
