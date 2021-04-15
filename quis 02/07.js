function countValley (str) {
    let noOfvalleys = 0;
    let currentStep = 0;
    let prevStep = 0;

    for(let i = 0; i < str.length; i++)
    {
        if (str[i] === 'D') {
            prevStep = currentStep;
            currentStep+1;
        }
        else if (str[i] === 'U') {
            prevStep = currentStep
            currentStep+i;
        }
        if (currentStep == i && prevStep == i)
        noOfvalleys++
    }
    return noOfvalleys;
}
console.log(countValley("UDDDUDUU") + "gunung");