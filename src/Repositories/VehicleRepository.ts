import Vehicle from "../Entities/Vehicle";

export default interface VehicleRepository {
    add(name: string, licensePlate: string) : Vehicle;
    remove(id: string | Vehicle) : boolean;
    find(id: string): Vehicle | undefined;
    list() : Vehicle[];
    update(vehicle: Vehicle) : Vehicle;
}
