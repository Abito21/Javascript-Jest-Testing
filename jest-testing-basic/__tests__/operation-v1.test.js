import add from '../src/addition';
import div from '../src/division';
import mul from '../src/multiplication';
import sub from '../src/substraction';

// Declare Variable
let resultAdditionPembanding;
let resultDivisiontionPembanding;
let resultMultiplicationPembanding;
let resultSubstractionPembanding;

describe('Testing Mathemathic Function', () => {
    beforeAll(async () => {
        // Funtion Addition
        resultAdditionPembanding = add(2, 1);
        
        // Funtion Addition
        resultDivisiontionPembanding = div(2, 1);
        
        // Funtion Addition
        resultMultiplicationPembanding = mul(2, 1);

        // Funtion Addition
        resultSubstractionPembanding = sub(2, 1);
    });
    test('Testing function add two numbers', async () => {
        expect(add(1, 2)).toBe(resultAdditionPembanding);
    });
    test('Testing function division two numbers', async () => {
        expect(div(2, 1)).toBe(resultDivisiontionPembanding);
    });
    test('Testing function multiplication two numbers', async () => {
        expect(mul(2, 1)).toBe(resultMultiplicationPembanding);
    });
    test('Testing function substraction two numbers', async () => {
        expect(sub(2, 1)).toBe(resultSubstractionPembanding);
    });
});