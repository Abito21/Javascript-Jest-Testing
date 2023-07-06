const csvToJson = require('convert-csv-to-json');
const excelToJson = require('convert-excel-to-json');

// Function : Add Combined Key to JSON
export const addCombinedKey = (arrayObject) => {
    arrayObject.forEach((element) => {
        element.combined = Object.values(element).concat();
    });
    return arrayObject;
};

// Function : Compare Value between Target and Comparison
let index = 1;
const fs = require('fs');
const converter = require('json-2-csv');

export const compareValue = (targetValue, comparisonValue, testColumn) => {
    let count = 0;
    const arrayFailedValue = [];
    const fail = [];

    const mapTarget = comparisonValue.map(element => element.combined);
    const mapComparison = comparisonValue.map(element => element.combined);

    const strComparisonValue = JSON.stringify(mapComparison);

    mapTarget.forEach((element) => {
        const strTargetValue = JSON.stringify(element);
        if (strComparisonValue.includes(strTargetValue) === false) {
            count += 1;
            fail.push(element);
        }
    });

    if (count > 0) {
        fail.forEach((element) => {
            const failObject = {};
            testColumn.forEach((key, idx) => {
                failObject[key] = element[idx];
            });
            arrayFailedValue.push(failObject);
        });

        let fileFailedName;
        if (index < 2) {
            fileFailedName = 'Value Target';
        } else {
            fileFailedName = 'Value Pembanding';
        }

        const params = { filename : './Failed Output - ' + fileFailedName + '.csv', body : arrayFailedValue };

        converter.json2csv(arrayFailedValue, (err, csv) => {
            if (err) {
                throw err;
            }

            fs.writeFileSync(params.filename, csv);
        });

        index += 1;
        throw (`${count} values are not match`);
    }
};