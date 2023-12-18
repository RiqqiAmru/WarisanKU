import BudayaApiSource from '../../data/budaya-api-source';

const LearnNow = {
  async render() {
    return `
    <section class="hero2">
    <div class="hero-header2">
      <h1 class="font-bold">Pelajari Budaya Di Nusantara</h1>
      <p>Budaya adalah jendela ke masa lalu, kunci untuk memahami masa kini, dan pintu menuju masa depan yang berkelanjutan</p>
    </div>
    </section>

    <section class="daftar__provinsi">
      <div class="judul2">
        <h2 class="font-bold">Pelajari Budaya di <span class="sorotan-terang">Provinsi Anda</span></h2>
      </div>

      <div class="cards__provinsi" id="cards__provinsi">
      
      </div>
    </section>
    `;
  },

  async afterRender() {
    function displayBudaya(data) {
      const cardsProvinsi = document.getElementById('cards__provinsi');

      data.forEach((budaya) => {
        const budayaDiv = document.createElement('div');
        const firstImage = budaya.rumah[0];
        budayaDiv.innerHTML = `
        <a href="/#/detail/${budaya.id}">
        <div class="card__provinsi">
          <img src="/images/img-budaya/${firstImage.gambar}" alt="${firstImage.nama}">
          <h3>${budaya.provinsi}</h3>
        </div>
      </a>
        `;

        cardsProvinsi.appendChild(budayaDiv);
      });
    }
    async function fetchData() {
      try {
        const data = await BudayaApiSource.daftarBudaya();

        // Memanggil fungsi untuk menampilkan data budaya
        displayBudaya(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  },

};

export default LearnNow;
