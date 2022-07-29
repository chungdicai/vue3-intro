const imgFallback = {
  mounted(el) {
    el.addEventListener('error', () => {
      // eslint-disable-next-line
      el.src = 'https://dummyimage.com/150x150/000/ffffff.png&text=no+image';
    });
  },
};

export default imgFallback;
