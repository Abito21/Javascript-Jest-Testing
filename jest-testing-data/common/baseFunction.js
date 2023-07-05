var fs = require('fs');

//create an empty file named mynewfile2.txt:
function openFile(err, file) {
    if (err) throw err;
    //console.log('Saved!');
    console.log(file);
};

const fileOpen = fs.readFile('D:/Github Project/Javascript-Jest-Testing/jest-testing-data/data/compareString.txt', 'utf-8', openFile);

console.log(fileOpen);