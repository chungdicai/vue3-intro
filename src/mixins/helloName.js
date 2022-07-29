const hello = {
  methods: {
    hello() {
      console.log('helloName form mixins/helloName', this.msg);
    },
  },
  data() {
    return {
      name: 'Jung',
    };
  },
};

export default hello;
