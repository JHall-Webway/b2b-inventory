const XLSX = require('xlsx');

function xlReader(file) {
    var wb = XLSX.read(file);
    // SHEET NAME TO BE A STANDARD FORMAT
    var sheet = wb.Sheets['Sheet1'];
    var data = XLSX.utils.sheet_to_json(sheet);
    // console.log(data);
    return data;
    // postBulk(data);
}


module.exports = xlReader;