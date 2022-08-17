import Fuelup from "./Fuelup";

export default class Vehicle {
    private readonly name: string;
    private readonly licensePlate: string;
    private readonly fuelups: Fuelup[];

    constructor(name: string, licensePlate: string, fuelups: Fuelup[]) {
        this.name = name;
        this.licensePlate = licensePlate;
        this.fuelups = fuelups;
    }
}
