import {randomUUID} from "crypto";
import Vehicle from "../Entities/Vehicle";
import VehicleRepository from "./VehicleRepository";

export default class InMemoryVehicleRepository implements VehicleRepository {

    private map : Map<string, Vehicle> = new Map<string, Vehicle>();

    add(name: string, licensePlate: string): Vehicle {
        const id = randomUUID();
        const vehicle = new Vehicle(id, name, licensePlate, []);
        this.map.set(id, vehicle);
        return vehicle;
    }
    remove(id: string): boolean {
        throw new Error("Method not implemented.");
    }
    find(id: string): Vehicle {
        throw new Error("Method not implemented.");
    }
    list(): Vehicle[] {
        return [... this.map.values()];
    }
    update(vehicle: Vehicle): Vehicle {
        throw new Error("Method not implemented.");
    }

}
