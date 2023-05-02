const fs = require('fs');
const { data } = require('./data.js');

const dataArray = Object.entries(data['Time Series (Daily)']).map(entry => {
  const timecode = new Date(entry[0]).getTime();
  const openValue = parseFloat(entry[1]['1. open']);
  return [timecode, openValue];
});

// console.log(dataArray);

const json = JSON.stringify(dataArray);

fs.writeFile('data.json', json, 'utf8', err => {
  if (err) {
    console.log('Error writing file:', err);
  } else {
    console.log('Data written to file data.json');
  }
});
