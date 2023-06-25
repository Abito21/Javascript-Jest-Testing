// Substring string value

const stringfloat1 = '0.7047538429';
const stringfloat2 = '10.3241374618190';
const stringfloat3 = stringfloat1.substring(1, 2);
const stringfloat4 = stringfloat2.substring(2, 3);

const convertDecimalFormat = (nilai) => {
    if (nilai.substring(1, 2) === '.'){
        const parse = nilai.substring(0, 4);
        nilai = parse;
    } else if (nilai.substring(2, 3) === '.') {
        const parse = nilai.substring(0, 5);
        nilai = parse;
    };
    console.log(nilai);
};

convertDecimalFormat(stringfloat1);
convertDecimalFormat(stringfloat2);
console.log(stringfloat3);
console.log(stringfloat4);
