import add from './sum';

escribe('sum.js', function() {
    test('add two numbers', function(){
        expect(add(1, 2)). toBe(3);
    })
})