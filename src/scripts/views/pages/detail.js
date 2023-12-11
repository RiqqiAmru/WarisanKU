import '../../../styles/tailwind.css';
import BudayaApiSource from '../../data/budaya-api-source';

const Detail = {
  async render() {
    return `
    <main class="bg-fixed bg-center bg-cover bg-no-repeat bg-body h-screen">
      <div class="container mx-auto py-10">
        <div class="bg-violet-950/70 px-3">
          <h1 class="text-4xl text-white text-center font-bold pt-10">Aceh</h1>
          <h2 class="text-3xl text-white pt-5 font-bold">Makanan Khas</h2>
          <hr />
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-3">
            <div class="bg-transparent rounded-md shadow-lg border-white border-2">
              <img
                src="../../api/img/aesan-gede.jpg"
                alt="food"
                class="h-60 min-h-0 max-h-70 mx-auto rounded-t-lg"
              />
              <div class="p-5">
                <h3 class="text-xl font-bold text-violet-300">Mie Aceh</h3>
                <p class="text-white text-sm">
                  Mie Aceh adalah masakan mie pedas yang berasal dari Aceh, Indonesia. Mie Aceh
                  terbuat dari mie kuning yang disajikan dengan irisan daging sapi atau kambing,
                  udang, kerang, dan sayuran hijau.
                </p>
              </div>
            </div>
        </div>
      </div>
    </main>
    `;
  },

  async afterRender() {
    const list = await BudayaApiSource.budayaList();
    console.log(list);
  },
};

export default Detail;
