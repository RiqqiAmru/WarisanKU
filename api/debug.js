const fs = require('fs');
const path = require('path');
const budayaData = require('./budaya.js');

const categories = ['makanan', 'tarian', 'upacara', 'pakaian', 'rumah', 'senjata'];
// filter data menjadi cuma array isi gambar ascending
// Menggunakan flatMap untuk menggabungkan array gambar dari seluruh provinsi
const semuaGambar = budayaData.flatMap((prov) => {
  const gambarMakanan = prov.makanan.map((makanan) => makanan.gambar);
  const gambarTarian = prov.tarian.map((tarian) => tarian.gambar);
  const gambarUpacara = prov.upacara.map((upacara) => upacara.gambar);
  const gambarPakaian = prov.pakaian.map((pakaian) => pakaian.gambar);
  const gambarRumah = prov.rumah.map((rumah) => rumah.gambar);
  const gambarSenjata = prov.senjata.map((senjata) => senjata.gambar);
  return [...gambarMakanan, ...gambarTarian, ...gambarUpacara,
    ...gambarPakaian, ...gambarSenjata, ...gambarRumah];
});

semuaGambar.forEach((gambar) => {
  const gambarPath = path.join(__dirname, `img/${gambar}`);
  if (!fs.existsSync(gambarPath)) {
    console.log(`gambar ${gambar} tidak ada`);
  }
});

// const budayaBaru = budayaData.map((prov) => {
//   const makananBaru = prov.makanan.map((makanan) => {
//     const gambar = makanan.gambar.replace(/ /g, '-').toLowerCase();
//     console.log(`ren '${makanan.gambar}' '${gambar}'`);
//     return { ...makanan, gambar };
//   });
//   const tarianBaru = prov.tarian.map((tarian) => {
//     const gambar = tarian.gambar.replace(/ /g, '-').toLowerCase();
//     console.log(`ren '${tarian.gambar}' '${gambar}'`);
//     return { ...tarian, gambar };
//   });
//   const upacaraBaru = prov.upacara.map((upacara) => {
//     const gambar = upacara.gambar.replace(/ /g, '-').toLowerCase();
//     console.log(`ren '${upacara.gambar}' '${gambar}'`);
//     return { ...upacara, gambar };
//   });
//   const pakaianBaru = prov.pakaian.map((pakaian) => {
//     const gambar = pakaian.gambar.replace(/ /g, '-').toLowerCase();
//     console.log(`ren '${pakaian.gambar}' '${gambar}'`);
//     return { ...pakaian, gambar };
//   });
//   const rumahBaru = prov.rumah.map((rumah) => {
//     const gambar = rumah.gambar.replace(/ /g, '-').toLowerCase();
//     console.log(`ren '${rumah.gambar}' '${gambar}'`);
//     return { ...rumah, gambar };
//   });
//   const senjataBaru = prov.senjata.map((senjata) => {
//     const gambar = senjata.gambar.replace(/ /g, '-').toLowerCase();
//     console.log(`ren '${senjata.gambar}' '${gambar}'`);
//     return { ...senjata, gambar };
//   });
//   return {
//     ...prov,
//     makanan: makananBaru,
//     tarian: tarianBaru,
//     upacara: upacaraBaru,
//     pakaian: pakaianBaru,
//     rumah: rumahBaru,
//     senjata: senjataBaru,
//   };
// });

// // ubah variable budayaBaru jadi file budayabaru.js
// const budayaBaruPath = path.join(__dirname, 'budayaBaru.js');
// fs.writeFileSync(budayaBaruPath, `module.exports = ${JSON.stringify(budayaBaru)}`);
