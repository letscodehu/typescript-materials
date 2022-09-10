import Fuelup from "./Fuelup";
import UUID from "./UUID";

export default class Vehicle {
    public readonly name: string;
    public readonly id: UUID;
    public readonly licensePlate: string;
    private readonly fuelups: Fuelup[];

    constructor(id: UUID, name: string, licensePlate: string, fuelups: Fuelup[]) {
        this.id = id;
        this.name = name;
        this.licensePlate = licensePlate;
        this.fuelups = fuelups;
    }
}
