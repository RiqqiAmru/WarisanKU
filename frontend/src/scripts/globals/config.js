const config = {
  BASE_URL: 'http://localhost:3000',
};

const endpoints = {
  BUDAYA: `${config.BASE_URL}/api/budaya`,
  BUDAYA_DETAIL: (id) => `${config.BASE_URL}/api/budaya/${id}`,
  BUDAYA_IMAGE: (imageName) => `${config.BASE_URL}/api/images/${imageName}`,
  BUDAYA_LAINNYA: `${config.BASE_URL}/api/provinsi`,
};

export { endpoints, config };
