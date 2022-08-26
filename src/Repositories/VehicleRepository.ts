import Vehicle from "../Entities/Vehicle";

export default interface VehicleRepository {
    add(name: string, licensePlate: string) : Vehicle;
    remove(id: string) : boolean;
    find(id: string): Vehicle;
    list() : Vehicle[];
    update(vehicle: Vehicle) : Vehicle;
}