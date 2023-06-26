import sub from './substraction';
import add from './sum';

describe('Testing fungsi matematis', function() {
    test('add two numbers', function(){
        expect(add(1, 2)).toBe(3);
    });
    test('substraction two numbers', function(){
        expect(sub(2, 1)).toBe(1);
    });
});