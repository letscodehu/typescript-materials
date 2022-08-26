import Fuelup from "./Fuelup";

export default class Vehicle {
    private readonly name: string;
    private readonly id: string;
    private readonly licensePlate: string;
    private readonly fuelups: Fuelup[];

    constructor(id: string, name: string, licensePlate: string, fuelups: Fuelup[]) {
        this.id = id;
        this.name = name;
        this.licensePlate = licensePlate;
        this.fuelups = fuelups;
    }
}
