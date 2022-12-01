import {describe, beforeEach, expect, test} from '@jest/globals'
import Fuelup from '../src/Entities/Fuelup';
import UUID from '../src/Entities/UUID';
import Vehicle from '../src/Entities/Vehicle';
import InMemoryVehicleRepository from '../src/Repositories/InMemoryVehicleRepository'

describe('vehicle repository', () => {

    let underTest: InMemoryVehicleRepository;
    beforeEach(() => {
        underTest = new InMemoryVehicleRepository();
    })
    describe('create', () => {
        test('created vehicle is in the list', () => {
            const created = underTest.add("car", "AAAA-001");
            const actual = underTest.list();
            expect(actual.length).toBe(1);
            expect(actual[0]).toBe(created);
        })
        test('created vehicle can be found', () => {
            const created = underTest.add("car", "AAAA-001");
            const actual = underTest.find(created.id) as Vehicle;
            expect(actual).toBe(created);
        })
    })
    describe('remove', () => {
        test('created vehicle can be removed by id', () => {
            const created = underTest.add("car", "AAAA-001");
            underTest.remove(created.id);
            expect(underTest.list().length).toBe(0);
        })
        test('created vehicle can be removed by vehicle', () => {
            const created = underTest.add("car", "AAAA-001");
            underTest.remove(created);
            expect(underTest.list().length).toBe(0);
        })
    })
    describe('update', () => {
        test('license plate can be updated', () => {
            const created = underTest.add("car", "AAAA-001");
            const updated = created.changeLicensePlate("BBBB-001");
            underTest.update(updated);
            const found = underTest.find(created.id) as Vehicle;
            expect(found.licensePlate).toBe("BBBB-001");
        })

        test('name can be updated', () => {
            const created = underTest.add("car", "AAAA-001");
            const updated = created.changeName("other car");
            underTest.update(updated);
            const found = underTest.find(created.id) as Vehicle;
            expect(found.name).toBe("other car");
        })

        test('fuelups can be updated', () => {
            const created = underTest.add("car", "AAAA-001");
            const fuelups = [new Fuelup(new UUID, new Date, 4800, 10, 240000)];
            const updated = created.changeFuelups(fuelups);
            underTest.update(updated);
            const found = underTest.find(created.id) as Vehicle;
            expect(found.fuelups()).toStrictEqual(fuelups);
        })
    })
})
