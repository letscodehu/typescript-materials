import Fuelup from "./Fuelup";

export default class Vehicle {
    public readonly name: string;
    public readonly id: string;
    public readonly licensePlate: string;
    private readonly fuelups: Fuelup[];

    constructor(id: string, name: string, licensePlate: string, fuelups: Fuelup[]) {
        this.id = id;
        this.name = name;
        this.licensePlate = licensePlate;
        this.fuelups = fuelups;
    }
}
