import mul from './multiplication';
import sub from './substraction';
import add from './addition';
import div from './division';

describe('Testing fungsi matematis', function() {
    test('add two numbers', function(){
        expect(add(1, 2)).toBe(3);
    });
    test('substraction two numbers', function(){
        expect(sub(2, 1)).toBe(1);
    });
    test('multiplication two numbers', function(){
        expect(mul(2, 1)).toBe(2);
    });
    test('multiplication two numbers', function(){
        expect(div(2, 1)).toBe(2);
    });
});