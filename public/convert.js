const fs = require('fs');

// Read the JSON file
const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

// Transform the CRSP field: remove commas, convert to number, round to integer
const transformedData = data.map((item) => ({
    ...item,
    CRSP: Math.round(parseFloat(item.CRSP.replace(/,/g, '').trim()))
}));

// Write the transformed data back to the file
fs.writeFileSync('data.json', JSON.stringify(transformedData, null, 2), 'utf8');
console.log('CRSP transformation complete!');
