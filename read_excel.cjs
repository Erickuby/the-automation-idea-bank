const XLSX = require('xlsx');
const fs = require('fs');

try {
    const workbook = XLSX.readFile('200+ Ways to Make Money with AI.xlsx');
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet);

    fs.writeFileSync('extracted_data.json', JSON.stringify(data, null, 2));
    console.log('Data written to extracted_data.json');
} catch (error) {
    console.error('Error reading file:', error);
}
