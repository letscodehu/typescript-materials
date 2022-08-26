import InMemoryVehicleRepository from "./Repositories/InMemoryVehicleRepository";

const repo = new InMemoryVehicleRepository();


repo.add("some", "AAAA-000");
console.log(repo.list());
