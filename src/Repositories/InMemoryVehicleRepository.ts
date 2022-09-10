import UUID from "../Entities/UUID";
import Vehicle from "../Entities/Vehicle";
import VehicleRepository from "./VehicleRepository";

export default class InMemoryVehicleRepository implements VehicleRepository {

    private map: Map<UUID, Vehicle> = new Map<UUID, Vehicle>();

    add(name: string, licensePlate: string): Vehicle {
        const id = new UUID();
        const vehicle = new Vehicle(id, name, licensePlate, []);
        this.map.set(id, vehicle);
        return vehicle;
    }
    remove(id: UUID | Vehicle): boolean {
        if (id instanceof UUID) {
            return this.removeById(id);
        } else {
            return this.removeByObject(id as Vehicle);
        }
    }
    private removeById(id: UUID) {
        return this.map.delete(id);
    }
    private removeByObject(vehicle: Vehicle) {
        return this.map.delete(vehicle.id)
    }
    find(id: UUID): Vehicle | undefined {
        return this.map.get(id);
    }
    list(): Vehicle[] {
        return [... this.map.values()];
    }
    update(vehicle: Vehicle): Vehicle {
        throw new Error("Method not implemented.");
    }

}
