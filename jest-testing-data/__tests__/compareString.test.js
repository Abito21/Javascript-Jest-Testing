import add from "../data/compareString";

describe('Testing fungsi penambahan', function() {
    test('Fungsi Penambahan', function() {
        expect(add(1, 2)).toBe(3);
    });
});