<template>
  <div class="home">
    <h2>Directives</h2>
    <section>
      <div class="flex h-[250px]">
        <img alt="Vue logo" class="w-1/2 object-contain" src="https://www.google.com/noimage.png">
        <img alt="Vue logo" class="w-1/2 object-contain" v-img-fallback src="https://www.google.com/noimage.png">
      </div>
      <div v-ripple="100" class="my-2 bg-yellow-400 inline-block p-4 cursor-pointer rounded-md">這是按鈕</div>
    </section>
  </div>
</template>

<script>

import hello from '../mixins/hello';
import helloName from '../mixins/helloName';

export default {
  name: 'HomeView',
  // mixins: [hello],
  mixins: [hello, helloName],
  mounted() {
    console.log('HomeView', this.name);
    console.log('HomeView', this.msg);
    this.hello();
  },
};
</script>
