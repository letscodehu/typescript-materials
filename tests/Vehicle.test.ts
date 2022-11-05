import { describe, beforeEach, expect, test } from '@jest/globals'
import Vehicle from '../src/Entities/Vehicle';
import InMemoryVehicleRepository from '../src/Repositories/InMemoryVehicleRepository';

describe("vehicle", () => {

    let car: Vehicle;
    beforeEach(() => {
        const repo = new InMemoryVehicleRepository();
        car = repo.add("name", "AAAA-001");
    })
    test('it should report N/A as average consumption without fuelups', () => {
        expect(car.averageConsumption()).toBe("N/A");
    })

    test('fuelup added is stored in the list', () => {
        const updated = car.addFuelup(4800, 10, 240000);
        const fuelups = updated.fuelups();
        expect(fuelups.length).toBe(1);
        expect(fuelups[0].amount).toBe(10);
        expect(fuelups[0].price).toBe(4800);
        expect(fuelups[0].mileage).toBe(240000);
    })

    test('it should report N/A as average consumption if not enough values to calculate', () => {
        const updated = car.addFuelup(4800, 10, 240000);
        expect(updated.averageConsumption()).toBe("N/A");
    })
    test('it should report the usage since the last fuelup scaled to 100km', () => {
        let updated = car.addFuelup(4800, 10, 240000);
        updated = updated.addFuelup(4800, 10, 240100);
        expect(updated.averageConsumption()).toBe(10);
    })
    test('it should report the usage since the first fuelup scaled to 100km', () => {
        let updated = car.addFuelup(4800, 10, 240000);
        updated = updated.addFuelup(4800, 10, 240100);
        updated = updated.addFuelup(4800, 20, 240200);
        expect(updated.averageConsumption()).toBe(15);
    })
    test('it should round average to 2 digits', () => {
        let updated = car.addFuelup(4800, 13, 240000);
        updated = updated.addFuelup(4800, 10, 240100);
        updated = updated.addFuelup(4800, 24, 240500);
        expect(updated.averageConsumption()).toBe(6.80);
    })
})
