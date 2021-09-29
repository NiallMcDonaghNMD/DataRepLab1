class vehicle 
{

    constructor(make, model, year)
    {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    Information()
    {
        //Make a string from the constructor inputs which can be outputted
       // let output = this.make + "" + "" + this.model + "" + this.year;
       // console.log(output);

       //Uses javascript within a console.log instead of using string method
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
    }
}
// Call to class and pass variables, print variables to console.
let output = new vehicle('Chevrolet', 'Camaro', 1998);
output.Information(); //calls method, passes input through method

class Cars extends vehicle 
{
    constructor(make, model, year, doors) //adding on to vehicle constructor
    {
        super(make, model, year); //Uses vehicle class through inheritance
        this.doors = doors;
    }


    infoInformation()
    {
        super.Information(); //through inheritance calling vehicles Information class which is outputting to console
        console.log(`Doors: ${this.doors}`);
    }
}
//Print to console 
let myCar = new Cars('VW', 'Polo', 2021, 5);
myCar.infoInformation();