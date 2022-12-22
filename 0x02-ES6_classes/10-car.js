export default class Car {
    constructor(brand, motor, color) {
        if (this.constructor === Car) {
            throw new TypeError('Car is an abstract class');
        }
        this._brand = brand;
        this._motor = motor;
        this._color = color;
    }
    cloneCar() {
        return new this.constructor(this._brand, this._motor, this._color);
    }
}