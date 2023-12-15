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

// Menampilkan gambar yang mengandung spasi
console.log('Gambar yang mengandung spasi:');
semuaGambar.filter((gambar) => gambar.includes(' ')).forEach((gambar, index) => {
  console.log(`${index + 1}. ${gambar} => ${gambar.replace(/ /g, '-').toLowerCase()}`);

  // baca data budaya.js dan ubah nama gambar menjadi file baru budaya-baru.js
  const budayaBaru = budayaData.map((prov) => {
    const makananBaru = prov.makanan.map((makanan) => {
      if (makanan.gambar === gambar) {
        return { ...makanan, gambar: gambar.replace(/ /g, '-').toLowerCase() };
      }
      return makanan;
    });
    const tarianBaru = prov.tarian.map((tarian) => {
      if (tarian.gambar === gambar) {
        return { ...tarian, gambar: gambar.replace(/ /g, '-').toLowerCase() };
      }
      return tarian;
    });
    const upacaraBaru = prov.upacara.map((upacara) => {
      if (upacara.gambar === gambar) {
        return { ...upacara, gambar: gambar.replace(/ /g, '-').toLowerCase() };
      }
      return upacara;
    });
    const pakaianBaru = prov.pakaian.map((pakaian) => {
      if (pakaian.gambar === gambar) {
        return { ...pakaian, gambar: gambar.replace(/ /g, '-').toLowerCase() };
      }
      return pakaian;
    });
    const rumahBaru = prov.rumah.map((rumah) => {
      if (rumah.gambar === gambar) {
        return { ...rumah, gambar: gambar.replace(/ /g, '-').toLowerCase() };
      }
      return rumah;
    });
    const senjataBaru = prov.senjata.map((senjata) => {
      if (senjata.gambar === gambar) {
        return { ...senjata, gambar: gambar.replace(/ /g, '-').toLowerCase() };
      }
      return senjata;
    });
    return {
      ...prov,
      makanan: makananBaru,
      tarian: tarianBaru,
      upacara: upacaraBaru,
      pakaian: pakaianBaru,
      rumah: rumahBaru,
      senjata: senjataBaru,
    };
  });
});
