const pickRandomItemFromOneProvinsi = (DataProvinsi) => {
  const categories = ['makanan', 'tarian', 'upacara', 'pakaian', 'rumah', 'senjata'];
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const randomItem = DataProvinsi[randomCategory]
    [Math.floor(Math.random() * DataProvinsi[randomCategory].length)];

  return randomItem;
};

module.exports = { pickRandomItemFromOneProvinsi };
