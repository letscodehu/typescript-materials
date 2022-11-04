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
    public changeLicensePlate(licensePlate : string) : Vehicle {
        return new Vehicle(this.id, this.name, licensePlate, this._fuelups);
    }
    public changeName(name : string) : Vehicle {
        return new Vehicle(this.id, name, this.licensePlate, this._fuelups);
    }
    public changeFuelups(fuelups : Fuelup[]) : Vehicle {
        return new Vehicle(this.id, this.name, this.licensePlate, [...fuelups]);
    }
    public fuelups() : Fuelup[] {
        return [...this._fuelups];
    }
}
