import { test } from 'vitest';
import { add } from './math.helper';



test('should add two positive numbers', () => {

    const result = add(1, 1);
    console.log({ result });


});


