const DrawerInitiator = {
  // eslint-disable-next-line no-unused-vars, object-curly-newline
  init({ button, drawer, content, close }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    close.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    // eslint-disable-next-line no-param-reassign
    drawer.style.display = 'flex';
    event.preventDefault();
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    // eslint-disable-next-line no-param-reassign
    drawer.style.display = 'none';
    event.preventDefault();
  },
};

export default DrawerInitiator;
