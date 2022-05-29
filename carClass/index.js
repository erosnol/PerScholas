// Create a Car Class
// Your Car Class needs to include the following:
// Properties:
// brand,
// model,
// color, 
// year,
// body style,
// fuel,
// mpg,
// odometer

// Methods:
// getCarDetails - display all details of the car.
// changeColor - change the color of the car.
// drive - A car can only drive if there is fuel in the tank.
// for every mile the car drives, the fuel level should change ;)
// Drive until you run out of fuel, increase your odometer.
// addFuel - should not allow fuel level to increase higher than the fuel tank capacity.


class carClass {
    constructor(brand, model, color, year, bodystyle, fuel, mpg, odometer) {
        .brand = brand
        .model = model
        .color = color
        .year = year
        .bodystyle = bodystyle
        .fuel = fuel
        .mpg = mpg
        .odometer = odometer
    }
    getCarDetails() {
        console.log()

    }

    changeColor(newColor) {
        .color = newColor
    }

    drive() {
        
    }

}

const erosCar = new carClass('Porsche', '911 Turbo S', 'Black', '2021', 'coupe', 'full', '17', '0')

erosCar.changeColor('matte cooper')

erosCar.getCarDetails()