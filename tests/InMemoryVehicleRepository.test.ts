import {describe, beforeEach, expect, test} from '@jest/globals'
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
})
