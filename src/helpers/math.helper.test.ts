import { test, expect, describe } from 'vitest';
import { add, divide, multiply, subtrac } from './math.helper';


describe('add', () => {

    test('should add two numbers', () => {
        const a = 1;
        const b = -3;

        const result = add(a, b);

        // console.log({ result });

        // Assert
        expect(result).toBe(a + b);

    });

    test('should subtrac two numbers', () => {
        const a = 2;
        const b = -5;

        const result = subtrac(a, b);

        // console.log({ result })

        expect(result).toBe(a - b);
    });

    test('should multiply two numbers', () => {
        const a = 2;
        const b = -5;

        const result = multiply(a, b);

        // console.log({ result })

        expect(result).toBe(a * b);
    });

    test('should divide two numbers', () => {
        const a = 2;
        const b = -5;

        const result = divide(a, b);

        // console.log({ result })

        expect(result).toBe(a / b);
    });

})



