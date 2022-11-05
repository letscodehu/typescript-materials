import Fuelup from "./Fuelup";
import UUID from "./UUID";

export default class Vehicle {
    public readonly name: string;
    public readonly id: UUID;
    public readonly licensePlate: string;
    private readonly _fuelups: Fuelup[];

    constructor(id: UUID, name: string, licensePlate: string, fuelups: Fuelup[]) {
        this.id = id;
        this.name = name;
        this.licensePlate = licensePlate;
        this._fuelups = fuelups;
    }
    public changeLicensePlate(licensePlate: string): Vehicle {
        return new Vehicle(this.id, this.name, licensePlate, this._fuelups);
    }
    public changeName(name: string): Vehicle {
        return new Vehicle(this.id, name, this.licensePlate, this._fuelups);
    }
    public changeFuelups(fuelups: Fuelup[]): Vehicle {
        return new Vehicle(this.id, this.name, this.licensePlate, [...fuelups]);
    }
    public fuelups(): Fuelup[] {
        return [...this._fuelups];
    }
    public averageConsumption(): string | number {
        if (this._fuelups.length < 2) {
            return "N/A";
        }
        const fuelups = this._fuelups.sort((one, another) => one.mileage - another.mileage);
        const kilometres = fuelups[fuelups.length - 1].mileage - fuelups[0].mileage;
        const amount: number = fuelups.reduce((total, fuelup): number => total + fuelup.amount, 0) - fuelups[0].amount;
        return Math.round(100 / kilometres * amount * 100) / 100;
    }
    addFuelup(price: number, amount: number, mileage: number): Vehicle {
        const fuelups = this.fuelups();
        fuelups.push(new Fuelup(new Date, price, amount, mileage));
        return this.changeFuelups(fuelups);
    }
}
