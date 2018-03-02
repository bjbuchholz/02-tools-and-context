"use strict";

const fp = require('../lib/fp.js');
let array = [1, 2, 3, 4, 5];

    describe('testing fp.forEach ', () => {
        it('should return 1, 2, 3, 4, 5', () => {
            let expected = [1, 2, 3, 4, 5];
            let result = fp.forEach(array, num => num);           
            expect(result).toEqual(expected);
        });
    });

    describe('testing fp.map', () => {
        it('should multiply each number by 4 and return an array with 4, 8, 12, 16, 20', () => {
            let expected = [4, 8, 12, 16, 20];
            let result = fp.map(array, num => num * 4);
            expect(result).toEqual(expected);
        });
    });

    describe('testing fp.filter', () => {
        it('should filter out odd numbers and return an array with 2, 4 ', () => {
            let expected = [2, 4];
            let result = fp.filter(array, num => num % 2 === 0);
            expect(result).toEqual(expected);
        });
    });

    describe('testing fp.reduce', () => {
        it('should add all numbers and return 15', () => {
            let expected = 15;
            let result = fp.reduce(array, (a, b) => a + b, 0);
            expect(result).toEqual(expected);
        });
    });
