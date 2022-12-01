import UUID from "./UUID";

export default class Fuelup {
    public readonly id : UUID
    public readonly time: Date;
    public readonly price: number;
    public readonly amount: number;
    public readonly mileage: number;

    constructor(id: UUID, time: Date, price: number, amount: number, mileage: number) {
        this.id = id;
        this.time = time;
        this.price = price;
        this.amount = amount;
        this.mileage = mileage;
    }
    changePrice(price: number) {
        return new Fuelup(this.id, this.time, price, this.amount, this.mileage);
    }
    changeTime(time: Date) {
        return new Fuelup(this.id, time, this.price, this.amount, this.mileage);
    }
    changeAmount(amount: number) {
        return new Fuelup(this.id, this.time, this.price, amount, this.mileage);
    }
    changeMileage(mileage: number) {
        return new Fuelup(this.id, this.time, this.price, this.amount, mileage);
    }
}
