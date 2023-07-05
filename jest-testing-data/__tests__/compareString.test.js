import add from '../data/compareString';
import * as base from '../common/baseFunction';

const txtToJson = require("txt-file-to-json");

// Variable Declare
let stringData;
let stringDataPembanding;

describe('Testing fungsi penambahan', () => {
    beforeAll(async () => {
        // File String Data
        stringData = txtToJson({ filePath: "./data/compareString.txt" });
        console.log(stringData);

        // Comparison File String Data 
        stringDataPembanding = txtToJson({ filePath: "./data/compareStringPembanding.txt" });
        console.log(stringDataPembanding);
    });
    test('Fungsi Penambahan', async () => {
        expect(add(1, 2)).toBe(3);
    });
});