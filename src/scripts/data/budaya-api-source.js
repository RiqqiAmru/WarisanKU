import { endpoints } from '../globals/config';

const budayaData = require('./budaya');
const { pickRandomItemFromOneProvinsi } = require('./utils');

class BudayaApiSource {
  static async budayaList() {
    const response = { data: budayaData };
    const responseJson = await response.json();
    return responseJson;
  }

  static async daftarBudaya() {
    return budayaData;
  }

  static async budayaDetail(id) {
    const idInt = parseInt(id);
    const budaya = budayaData.find((item) => item.id === idInt);

    if (!budaya) {
      return { error: 'Budaya not found' };
    }

    return { data: budaya };
  }

  static async budayaImage(imageName) {
    const response = await fetch(endpoints.BUDAYA_IMAGE(imageName));
    const responseBlob = await response.blob();
    return responseBlob;
  }

  static async budayaLainnya() {
    const dataProvinsi = budayaData.map((item) => ({
      id: item.id,
      provinsi: item.provinsi,
      item: pickRandomItemFromOneProvinsi(item),
    }));
    const randomDataProvinsi = dataProvinsi.sort(() => 0.5 - Math.random()).slice(0, 9);
    return { data: randomDataProvinsi };
  }
}

export default BudayaApiSource;
