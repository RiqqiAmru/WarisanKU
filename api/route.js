const path = require('path');
const budayaData = require('./budaya.js');
const { pickRandomItemFromOneProvinsi } = require('./utils.js');

const route = [
  {
    method: 'GET',
    path: '/api/budaya',
    handler: () => ({ data: budayaData }),
  },
  {
    method: 'GET',
    path: '/api/budaya/{id}',
    handler: (request, h) => {
      const id = parseInt(request.params.id);
      const budaya = budayaData.find((item) => item.id === id);

      if (!budaya) {
        return h.response({ error: 'Budaya not found' }).code(404);
      }

      return { data: budaya };
    },
  },
  {
    method: 'GET',
    path: '/api/images/{imageName}',
    handler: (request, h) => {
      const { imageName } = request.params;
      return h.file(path.join(__dirname, `../api/img/${imageName}`));
    },
  },

  {
    method: 'GET',
    path: '/api/provinsi',
    handler: () => {
      const dataProvinsi = budayaData.map((item) => ({
        id: item.id,
        provinsi: item.provinsi,
        // randomly pick one image from the array
        item: pickRandomItemFromOneProvinsi(item),
      }));
      return { data: dataProvinsi };
    },
  },
];

module.exports = route;
