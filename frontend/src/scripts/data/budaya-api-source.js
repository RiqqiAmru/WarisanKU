import { endpoints } from '../globals/config';

class BudayaApiSource {
  static async budayaList() {
    const response = await fetch(endpoints.BUDAYA);
    const responseJson = await response.json();
    return responseJson;
  }

  static async budayaDetail(id) {
    const response = await fetch(endpoints.BUDAYA_DETAIL(id));
    const responseJson = await response.json();
    return responseJson;
  }

  static async budayaImage(imageName) {
    const response = await fetch(endpoints.BUDAYA_IMAGE(imageName));
    const responseBlob = await response.blob();
    return responseBlob;
  }

  static async budayaLainnya() {
    const response = await fetch(endpoints.BUDAYA_LAINNYA);
    const responseJson = await response.json();
    return responseJson;
  }
}

export default BudayaApiSource;
