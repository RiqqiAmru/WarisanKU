import BudayaApiSource from '../../data/budaya-api-source';
import slogan from '../../data/slogan';

const Home = {
  async render() {
    return `
    <!-- Hero -->
    <section class="hero">
    <div class="hero-header">
      <h1 class="font-bold"><span class="sorotan">Warisan</span>KU</h1>
      <p id="slogan"></p>
      <a href="#" class="ctn">Learn Now</a>
    </div>
  </section>
  <!-- End Hero -->

  <!-- Summary -->
  <section class="summary">
    <article class="row">
      <div class="card__summary">
        <h5>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path
              d="m482-200 114-113-114-113-42 42 43 43q-28 1-54.5-9T381-381q-20-20-30.5-46T340-479q0-17 4.5-34t12.5-33l-44-44q-17 25-25 53t-8 57q0 38 15 75t44 66q29 29 65 43.5t74 15.5l-38 38 42 42Zm165-170q17-25 25-53t8-57q0-38-14.5-75.5T622-622q-29-29-65.5-43T482-679l38-39-42-42-114 113 114 113 42-42-44-44q27 0 55 10.5t48 30.5q20 20 30.5 46t10.5 52q0 17-4.5 34T603-414l44 44ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
              fill="#ECB8AA"
            /></svg>Latar Belakang
        </h5>
        <p>
          Website ini muncul sebagai solusi, melestarikan dan mempromosikan
          keberagaman budaya Nusantara di era globalisasi.
        </p>
      </div>
      <div class="card__summary">
        <h5>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path
              d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"
              fill="#ECB8AA"
            /></svg>Tujuan
        </h5>
        <p>
          Memelihara keberagaman budaya Nusantara, mempromosikan pemahaman
          global, dan meresapi warisan lokal dalam era globalisasi.
        </p>
      </div>
      <div class="card__summary">
        <h5>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path
              d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q32 0 62-6t58-17l60 61q-41 20-86 31t-94 11Zm280-80v-120H640v-80h120v-120h80v120h120v80H840v120h-80ZM424-296 254-466l56-56 114 114 400-401 56 56-456 457Z"
              fill="#ECB8AA"
            /></svg>Manfaat
        </h5>
        <p>
          Menghubungkan, mendidik, dan memperkaya pengguna dengan kearifan
          lokal, meredakan dampak homogenisasi budaya global.
        </p>
      </div>
    </article>
  </section>
  <!-- End Summary -->

  <!-- About -->
  <section class="about">
    <article>
      <h2 class="font-bold"><span class="sorotan-terang">About</span> Website</h2>
      <p class="summary__about">
        Sebuah jendela digital yang mengajak Anda mengenal kekayaan budaya
        Nusantara. Kami hadir untuk menyajikan cerita dan warisan tak
        ternilai dari setiap provinsi di Indonesia, membawa Anda dalam
        perjalanan mengagumkan melintasi keindahan tradisi, seni, dan
        sejarah yang tumbuh subur di tanah air kita.
      </p>
      <div class="cards__about">
        <div class="card__point g1">
          <img src="./images/icons/food.png" alt="makanan" />
          <h3>Makanan Khas</h3>
          <p>
            Kelezatan yang mencerminkan cita rasa lokal dan warisan kuliner
            suatu wilayah
          </p>
        </div>
        <div class="card__point g2">
          <img src="./images/icons/dance.png" alt="tarian" />
          <h3>Tarian Adat</h3>
          <p>
            Harmoni tubuh yang mengabadikan sejarah dan makna di setiap
            geraknya
          </p>
        </div>
        <div class="card__point g3">
          <img src="./images/icons/ceremony.png" alt="Upacara" />
          <h3>Upacara Adat</h3>
          <p>
            Jendela spiritualitas dan penghormatan, membentuk ikatan tak
            terputus antara masa lalu dan masa kini
          </p>
        </div>
        <div class="card__point g4">
          <img src="./images/icons/house.png" alt="Rumah Adat" />
          <h3>Rumah Adat</h3>
          <p>
            Setiap atap adalah payung tradisi, dan setiap bilik adalah
            lembaran buku yang mencatat jejak waktu
          </p>
        </div>
        <div class="card__point g5">
          <img src="./images/icons/weapon.png" alt="Rumah Adat" />
          <h3>Senjata Tradisional</h3>
          <p>
            Setiap ukiran dan mata pisau menyimpan kekuatan spiritual dan
            keahlian leluhur
          </p>
        </div>
        <div class="card__point g6">
          <img src="./images/icons/wear.png" alt="Pakaian Adat" />
          <h3>Pakaian Adat</h3>
          <p>
            Setiap benang dan warna adalah cerita, setiap motif dan desain
            adalah bahasa simbolik
          </p>
        </div>
      </div>
    </article>
  </section>
  <!-- End About -->

  <section class="list__budaya" id="explore-budaya">
    <h2 class="font-bold">Eksplor Budaya<span class="sorotan-terang">Sekarang</span></h2>
    <div class="items__budaya">
      <!-- Swiper JS -->
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
      </div>
      <!-- End Swiper JS -->
    </div>
  </section>

  <section class="our__team">
    <h2 class="font-bold">Our Team</h2>
    <div class="row">
      <div class="card__member">
        <img src="./images/member/Riqqi.jpeg" alt="" />
        <h4>Riqqi Amru</h4>
        <p>F485YB013</p>
      </div>
      <div class="card__member">
        <img src="./images/member/hilda.jpeg" alt="" />
        <h4>Hilda Putri</h4>
        <p>F225XB016</p>
      </div>
      <div class="card__member">
        <img src="./images/member/wilfrid.jpeg" alt="" />
        <h4>Wilfrid Purba</h4>
        <p>F628YB080</p>
      </div>
      <div class="card__member">
        <img src="./images/member/ikrom.jpg" alt="" />
        <h4>Muhammad Ikrom</h4>
        <p>F485YB015</p>
      </div>
      <div class="card__member">
        <img src="./images/member/abdillah.jpg" alt="" />
        <h4>Abdillah Rezeki</h4>
        <p>S247YA402</p>
      </div>
    </div>
  </section>
    `;
  },

  async afterRender() {
    function initializeSwiper() {
      // eslint-disable-next-line no-unused-vars, no-undef
      const swiper = new Swiper('.mySwiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        coverflowEffect: {
          rotate: 15,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }

    function generateSlogan() {
      if (window.location.hash === '#/' || window.location.hash === '') {
        const randomIndex = Math.floor(Math.random() * slogan.length);
        const randomSlogan = slogan[randomIndex];
        document.getElementById('slogan').innerText = randomSlogan;
      }
    }
    generateSlogan();
    const budayaLainnya = await BudayaApiSource.budayaLainnya();

    const swiperWraper = document.querySelector('.swiper-wrapper');
    // eslint-disable-next-line no-shadow
    budayaLainnya.data.forEach((provinsi) => {
      const imgElement = document.createElement('img');
      const linkLainnya = document.createElement('a');
      const swiperSlide = document.createElement('div');
      const namaDaerah = document.createElement('h4');

      imgElement.src = `/images/img-budaya/${provinsi.item.gambar}`;
      namaDaerah.innerHTML = `${provinsi.item.nama}`;

      swiperWraper.appendChild(swiperSlide);
      swiperSlide.classList.add('swiper-slide');
      swiperSlide.appendChild(linkLainnya);
      linkLainnya.href = (`/#/detail/${provinsi.id}`);
      linkLainnya.appendChild(imgElement);
      namaDaerah.classList.add('text-center');
      swiperSlide.appendChild(namaDaerah);
    });
    initializeSwiper();
    setInterval(generateSlogan, 5000);
  },
};

export default Home;
