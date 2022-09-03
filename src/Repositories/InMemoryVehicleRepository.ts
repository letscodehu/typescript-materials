import {randomUUID} from "crypto";
import Vehicle from "../Entities/Vehicle";
import VehicleRepository from "./VehicleRepository";

export default class InMemoryVehicleRepository implements VehicleRepository {

    private map: Map<string, Vehicle> = new Map<string, Vehicle>();

    add(name: string, licensePlate: string): Vehicle {
        const id = randomUUID();
        const vehicle = new Vehicle(id, name, licensePlate, []);
        this.map.set(id, vehicle);
        return vehicle;
    }
    remove(id: string | Vehicle): boolean {
        if (typeof id === 'string') {
            return this.removeById(id);
        } else {
            return this.removeByObject(id as Vehicle);
        }
    }
    private removeById(id: string) {
        return this.map.delete(id);
    }
    private removeByObject(vehicle: Vehicle) {
        return this.map.delete(vehicle.id)
    }
    find(id: string): Vehicle | undefined {
        return this.map.get(id);
    }
    list(): Vehicle[] {
        return [... this.map.values()];
    }
    update(vehicle: Vehicle): Vehicle {
        throw new Error("Method not implemented.");
    }

}
