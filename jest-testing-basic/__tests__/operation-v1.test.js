import add from '../src/addition';
import { addition } from '../src/additionPembanding';
import div from '../src/division';
import { division } from '../src/divisionPembanding';
import mul from '../src/multiplication';
import { multiplication } from '../src/multiplicationPembanding';
import sub from '../src/substraction';
import { substraction } from '../src/substractionPembanding';

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
        resultAdditionPembanding = addition(2, 1);
        
        // Funtion Division
        resultDivision= div(2, 1);

        // Funtion Division Pembanding
        resultDivisionPembanding = division(2, 1);
        
        // Funtion Multiplication
        resultMultiplication = mul(2, 1)
        
        // Funtion Multiplication Pembanding
        resultMultiplicationPembanding = multiplication(2, 1);

        // Funtion Substraction
        resultSubstraction = sub(2, 1);

        // Funtion Substraction Pembanding
        resultSubstractionPembanding = substraction(2, 1);
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