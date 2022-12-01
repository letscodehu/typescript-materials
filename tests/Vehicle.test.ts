import { describe, beforeEach, expect, test } from '@jest/globals'
import Fuelup from '../src/Entities/Fuelup';
import UUID from '../src/Entities/UUID';
import Vehicle from '../src/Entities/Vehicle';
import InMemoryVehicleRepository from '../src/Repositories/InMemoryVehicleRepository';

describe("vehicle", () => {

    let car: Vehicle;
    beforeEach(() => {
        const repo = new InMemoryVehicleRepository();
        car = repo.add("name", "AAAA-001");
    })

    describe('fuelup', () => {
        test('fuelup added is stored in the list', () => {
            const updated = car.addFuelup(4800, 10, 240000);
            const fuelups = updated.fuelups();
            expect(fuelups.length).toBe(1);
            expect(fuelups[0].amount).toBe(10);
            expect(fuelups[0].price).toBe(4800);
            expect(fuelups[0].mileage).toBe(240000);
        })
        test('fuelup removed is not found in the list', () => {
            let updated = car.addFuelup(4800, 10, 240000);
            const originalFuelups = updated.fuelups();
            const deleted = originalFuelups[0];

            updated = updated.removeFuelup(deleted);

            const actual = updated.fuelups();
            expect(actual.length).toBe(0);
        })

        test('fuelup price updated is returned with new values in the list', () => {
            let updated = car.addFuelup(4800, 10, 240000);
            const originalFuelups = updated.fuelups();
            const fuelup = originalFuelups[0];
            const changed = fuelup.changePrice(6970);

            updated = updated.updateFuelup(changed);

            const actual = updated.fuelups()[0];
            expect(actual.price).toBe(6970);
        })
        test('fuelup time updated is returned with new values in the list', () => {
            let updated = car.addFuelup(4800, 10, 240000);
            const originalFuelups = updated.fuelups();
            const fuelup = originalFuelups[0];
            const time = new Date;
            const changed = fuelup.changeTime(time);

            updated = updated.updateFuelup(changed);

            const actual = updated.fuelups()[0];
            expect(actual.time).toBe(time);
        })
        test('fuelup amount updated is returned with new values in the list', () => {
            let updated = car.addFuelup(4800, 10, 240000);
            const originalFuelups = updated.fuelups();
            const fuelup = originalFuelups[0];
            const amount = 15;
            const changed = fuelup.changeAmount(amount);

            updated = updated.updateFuelup(changed);

            const actual = updated.fuelups()[0];
            expect(actual.amount).toBe(amount);
        })
        test('fuelup mileage updated is returned with new values in the list', () => {
            let updated = car.addFuelup(4800, 10, 240000);
            const originalFuelups = updated.fuelups();
            const fuelup = originalFuelups[0];
            const mileage = 15;
            const changed = fuelup.changeMileage(mileage);

            updated = updated.updateFuelup(changed);

            const actual = updated.fuelups()[0];
            expect(actual.mileage).toBe(mileage);
        })
        test('updating a non existent fuelup in the list does nothing', () => {
            let updated = car.addFuelup(4800, 10, 240000);
            const changed = new Fuelup(new UUID, new Date, 6970, 10, 240000);

            updated = updated.updateFuelup(changed);

            const actual = updated.fuelups()[0];
            expect(actual.price).toBe(4800);
        })
    })

    describe('consumption', () => {
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
        test('it should report N/A as average consumption without fuelups', () => {
            expect(car.averageConsumption()).toBe("N/A");
        })

    })


})
