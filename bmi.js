class BMI 
{
    constructor(height, weight)
    {
        this.height = height;
        this.weight = weight;
    }

    calculateBMI ()
    {

        let bmi = this.weight/(this.height**2);
        return bmi;
    }
}
//Passing variables through method
let myBMI = new BMI(2, 90);
let calc = myBMI.calculateBMI();
console.log(calc);