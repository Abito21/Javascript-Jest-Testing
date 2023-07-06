import * as column from '../data/compareString'
import * as base from '../common/baseFunction';

const txtToJson = require("txt-file-to-json");

// Variable Declare
let stringDataTarget;
let stringDataPembanding;

describe('Testing fungsi penambahan', () => {
    beforeAll(async () => {
        // File String Data
        stringDataTarget = txtToJson({ filePath: "./data/compareString.txt" });
        stringDataTarget = base.addCombinedKey(stringDataTarget);
        console.log(stringDataTarget);

        // Comparison File String Data 
        stringDataPembanding = txtToJson({ filePath: "./data/compareStringPembanding.txt" });
        stringDataPembanding = base.addCombinedKey(stringDataPembanding);
        console.log(stringDataPembanding);
    });
    test('Testing detail data compareString ', async () => {
        base.compareValue(stringDataTarget, stringDataPembanding, column.targetTestColumn);
    });
});