import {describe, beforeEach, expect, test} from '@jest/globals'
import InMemoryVehicleRepository from '../src/Repositories/InMemoryVehicleRepository'

describe('vehicle repository', () => {

    describe('create', () => {
        let underTest: InMemoryVehicleRepository;
        beforeEach(() => {
            underTest = new InMemoryVehicleRepository();
        })
        test('created vehicle is in the list', () => {
            underTest.add("car", "AAAA-001");
            const actual = underTest.list();
            expect(actual.length).toBe(1);
        })
    })
})
