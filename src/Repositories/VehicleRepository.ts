import UUID from "../Entities/UUID";
import Vehicle from "../Entities/Vehicle";

export default interface VehicleRepository {
    add(name: string, licensePlate: string) : Vehicle;
    remove(id: UUID | Vehicle) : boolean;
    find(id: UUID): Vehicle | undefined;
    list() : Vehicle[];
    update(vehicle: Vehicle) : Vehicle;
}
