import add from '../src/addition';
import div from '../src/division';
import mul from '../src/multiplication';
import sub from '../src/substraction';

// Declare Variable
let resultAddition;
let resultAdditionPembanding;
let resultDivision;
let resultDivisionPembanding;
let resultMultiplication;
let resultMultiplicationPembanding;
let resultSubstraction;
let resultSubstractionPembanding;

describe('Testing Mathemathic Function', () => {
    beforeAll(async () => {
        // Funtion Addition
        resultAddition = add(2, 1);
        
        // Funtion Addition Pembanding
        resultAdditionPembanding = add(2, 1);
        
        // Funtion Division
        resultDivision= div(2, 1);

        // Funtion Division Pembanding
        resultDivisionPembanding = div(2, 1);
        
        // Funtion Multiplication
        resultMultiplication = mul(2, 1)
        
        // Funtion Multiplication Pembanding
        resultMultiplicationPembanding = mul(2, 1);

        // Funtion Substraction
        resultSubstraction = sub(2, 1);

        // Funtion Substraction Pembanding
        resultSubstractionPembanding = sub(2, 1);
    });
    test('Testing function add two numbers', async () => {
        expect(resultAddition).toBe(resultAdditionPembanding);
    });
    test('Testing function division two numbers', async () => {
        expect(resultDivision).toBe(resultDivisionPembanding);
    });
    test('Testing function multiplication two numbers', async () => {
        expect(resultMultiplication).toBe(resultMultiplicationPembanding);
    });
    test('Testing function substraction two numbers', async () => {
        expect(resultSubstraction).toBe(resultSubstractionPembanding);
    });
});