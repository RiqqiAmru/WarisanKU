const config = {
  BASE_URL: 'http://localhost:3000',
};

const endpoints = {
  BUDAYA: `${config.BASE_URL}/api/budaya`,
  BUDAYA_DETAIL: (id) => `${config.BASE_URL}/api/budaya/${id}`,
};

export { endpoints, config };
