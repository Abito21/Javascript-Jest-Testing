import mul from '../src/multiplication';
import sub from '../src/substraction';
import add from '../src/addition';
import div from '../src/division';

describe('Testing Mathemathic Function', function() {
    test('Testing function add two numbers', function(){
        expect(add(1, 2)).toBe(3);
    });
    test('Testing function substraction two numbers', function(){
        expect(sub(2, 1)).toBe(1);
    });
    test('Testing function multiplication two numbers', function(){
        expect(mul(2, 1)).toBe(2);
    });
    test('Testing function multiplication two numbers', function(){
        expect(div(2, 1)).toBe(2);
    });
});