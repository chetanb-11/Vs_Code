const calctaxObj = {
    calctacfun() {
        console.log("Tax rate on your salary is 10%");
    }
}
const employee1 = {
    salary: 50000
}
employee1.__proto__ = calctaxObj;

const employee2 = {
    salary: 50000
}
employee2.__proto__ = calctaxObj;

class CarCompany{
    constructor(brand, mileage) {
        console.log("A new Object is created");
        this.brand = brand;
        this.mileage = mileage;
    }
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
}
let carModel_1 = new CarCompany("fortuner", 12);
console.log(carModel_1);
let carModel_2 = new CarCompany("lexus", 11);
console.log(carModel_2);