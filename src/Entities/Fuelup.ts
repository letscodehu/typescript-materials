export default class Fuelup {
    private readonly time: Date;
    private readonly price: number;
    private readonly amount: number;
    private readonly mileage: number;

    constructor(time: Date, price: number, amount: number, mileage: number) {
        this.time = time;
        this.price = price;
        this.amount = amount;
        this.mileage = mileage;
    }
}
