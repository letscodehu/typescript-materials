export default class Fuelup {
    public readonly time: Date;
    public readonly price: number;
    public readonly amount: number;
    public readonly mileage: number;

    constructor(time: Date, price: number, amount: number, mileage: number) {
        this.time = time;
        this.price = price;
        this.amount = amount;
        this.mileage = mileage;
    }
}
