const csv = require('csvtojson')
let fs = require('fs')
allPermissionsFilePath='/Users/sanketvaru/webuildsg/webuildsg/data/json/test.json'
const csvFilePath = '/Users/sanketvaru/webuildsg/webuildsg/data/csv/datapage-graph-links.csv'
let writeAllPermissionsdata = fs.createWriteStream(allPermissionsFilePath)


csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        // console.log(jsonObj);
        writeAllPermissionsdata.write(JSON.stringify(jsonObj));


    })