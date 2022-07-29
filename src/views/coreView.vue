<template>
  <div class="coreView">
    <h2>core</h2>
    <section>
      Count is: {{count}}, double is: {{double}}
      <button class=" bg-green-500 px-4 py-2 my-2 rounded-md inline-block mx-2" @click="increment">Add</button>
    </section>
  </div>
</template>

<script setup>

import { ref, computed, onMounted } from 'vue';

const count = ref(0);
const double = computed(() => count.value * 2);
const increment = () => {
  count.value++;
};
onMounted(() => {
  console.log('onMounted', double.value);
});

// 下次講
// const props = defineProps({
//   foo: {
//     type: String,
//     default: 'foo',
//   },
// });

// 下次講
// const emit = defineEmits(['change', 'delete']);
</script>
