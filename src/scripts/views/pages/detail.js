import '../../../styles/tailwind.css';
import BudayaApiSource from '../../data/budaya-api-source';
import UrlParser from '../../routes/url-parser';

const Detail = {
  async render() {
    return `
    <main class="bg-fixed bg-center bg-cover bg-no-repeat bg-body h-screen">
      <div class="container mx-auto py-10">
        <div class="bg-violet-950/70 px-3">
          <h1 class="text-4xl text-white text-center font-bold pt-10" id='provinsi'>Aceh</h1>

          <h2 class="text-3xl text-white pt-5 font-bold">Makanan Khas</h2>
          <hr />
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-3" id='makanan'></div>

          <h2 class="text-3xl text-white pt-5 font-bold">Tarian Daerah</h2>
          <hr />
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-3" id='tarian'></div>
            
          <h2 class="text-3xl text-white pt-5 font-bold">Upacara Daerah</h2>
          <hr />
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-3" id='upacara'></div>
            
          <h2 class="text-3xl text-white pt-5 font-bold">Pakaian Adat</h2>
          <hr />
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-3" id='pakaian'></div>
            
          <h2 class="text-3xl text-white pt-5 font-bold">Rumah Adat</h2>
          <hr />
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-3" id='rumah'></div>
            
          <h2 class="text-3xl text-white pt-5 font-bold">Senjata Adat</h2>
          <hr />
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-3" id='senjata'></div>
            
        </div>
      </div>
    </main>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrl(false);

    const budayaDetail = await BudayaApiSource.budayaDetail(url.id);

    const provinsi = document.querySelector('#provinsi');
    provinsi.innerHTML = budayaDetail.data.provinsi;

    const makanan = document.querySelector('#makanan');
    const tarian = document.querySelector('#tarian');
    const upacara = document.querySelector('#upacara');
    const pakaian = document.querySelector('#pakaian');
    const rumah = document.querySelector('#rumah');
    const senjata = document.querySelector('#senjata');

    this.makeAndListingElement(budayaDetail.data.makanan, makanan);
    this.makeAndListingElement(budayaDetail.data.tarian, tarian);
    this.makeAndListingElement(budayaDetail.data.upacara, upacara);
    this.makeAndListingElement(budayaDetail.data.pakaian, pakaian);
    this.makeAndListingElement(budayaDetail.data.rumah, rumah);
    this.makeAndListingElement(budayaDetail.data.senjata, senjata);
  },

  makeAndListingElement(dataType, container) {
    dataType.forEach((item) => {
      const cardDetail = document.createElement('card-detail');
      cardDetail.data = item;
      container.appendChild(cardDetail);
    });
  },

};

export default Detail;
