const budayaData = require('./budaya.js');

const categories = ['makanan', 'tarian', 'upacara', 'pakaian', 'rumah', 'senjata'];
const randomCategory = categories[Math.floor(Math.random() * categories.length)];
const randomProvinsi = Math.floor(Math.random() * budayaData.length);
const randomItem = budayaData[randomProvinsi][randomCategory]
  [Math.floor(Math.random() * budayaData[randomProvinsi][randomCategory].length)];

console.log(randomItem);
