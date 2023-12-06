const Detail = {
  async render() {
    return '<h2>Detail Page</h2>';
  },

  async afterRender() {
    console.log('ok');
  },
};

export default Detail;
