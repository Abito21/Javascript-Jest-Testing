import * as column from '../data/compareString'
import * as base from '../common/baseFunction';

const txtToJson = require("txt-file-to-json");

// Variable Declare
let stringData;
let stringDataPembanding;

describe('Testing fungsi penambahan', () => {
    beforeAll(async () => {
        // File String Data
        stringData = txtToJson({ filePath: "./data/compareString.txt" });
        stringData = base.addCombinedKey(stringData);
        console.log(stringData);

        // Comparison File String Data 
        stringDataPembanding = txtToJson({ filePath: "./data/compareStringPembanding.txt" });
        stringDataPembanding = base.addCombinedKey(stringDataPembanding);
        console.log(stringDataPembanding);
    });
    test('Testing detail data compareString ', async () => {
        base.compareValue(stringData, stringDataPembanding, column.targetTestColumn);
    });
});