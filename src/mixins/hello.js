const hello = {
  methods: {
    hello() {
      console.log('hello form mixins/hello');
    },
  },
  mounted() {
    console.log('hello.js');
    this.hello();
  },
  data() {
    return {
      msg: '妳好',
    };
  },
};

export default hello;
