<template>
  <div class="about">
    <h1>Composition API Intro</h1>
    <h2>TODO LIST</h2>
    <div>
      <!--  eslint-disable-next-line -->
      <input v-model="todo" @keyup.enter="add" class="mr-2 border border-solid" type="text">
      <button @click="add" v-ripple class=" bg-yellow-500 px-4 py-2 rounded-md">Add</button>
    </div>
    <ul>
      <li v-for="item in items" :key="item" class="my-2">
        <span class=" min-w-[200px] py-2 border border-solid border-gray-800/25 inline-block">{{item}}</span>
        <button @click="remove(item)" class=" bg-red-500 px-4 py-[calc(0.5rem+1px)] rounded-md rounded-l-none">Remove</button>
      </li>
    </ul>
    <h2>COUNTER</h2>
    <span class=" bg-green-500 px-4 py-2 my-2 rounded-md inline-block mx-2" v-ripple @click="countAdd" @keypress="countAdd">點擊增加次數 {{count}}</span>
    <span class=" bg-orange-500 px-4 py-2 my-2 rounded-md inline-block mx-2" v-ripple @click="countRemove" @keypress="countRemove">次數歸零</span>
    <span class=" bg-orange-500 px-4 py-2 my-2 rounded-md inline-block mx-2" v-ripple @click="addRyderNipple" @keypress="addRyderNipple">次數歸零</span>
  </div>
</template>

<script>
import { onMounted, ref, watchEffect } from 'vue';
import {
  todo, items, add, remove,
} from '../compositions/toDo';

import { add as countAdd, remove as countRemove, count } from '../compositions/counter';

export default {
  setup() {
    const ryder = ref(0);
    const stop1 = watchEffect(() => {
      if (ryder.value > 10) {
        stop1();
        console.log('stop', ryder.value);
      }
    });
    const addRyderNipple = () => {
      ryder.value++;
    };
    onMounted(() => {
    });
    return {
      todo, items, add, remove, countAdd, countRemove, count, ryder, addRyderNipple,
    };
  },
};
</script>

<!-- <script setup>
import { ref } from 'vue';

const todo = ref('');
const items = ref(['Vue', 'is', 'Awesome']);

const add = () => { // eslint-disable-line
  if (todo.value) {
    items.value.push(todo.value);
    todo.value = '';
  }
};

const remove = (item) => { // eslint-disable-line
  items.value = items.value.filter((v) => v !== item);
};

const count = ref(0);
const countAdd = () => {
  count.value++;
};
const countRemove = () => {
  count.value = 0;
};
</script> -->

<!-- <script>
import { ref } from 'vue';

export default {
  setup() {
    const todo = ref('');
    const items = ref(['Vue', 'is', 'Awesome']);

    const add = () => {
      if (todo.value) {
        items.value.push(todo.value);
        todo.value = '';
      }
    };

    const remove = (item) => {
      items.value = items.value.filter((v) => v !== item);
    };

    const count = ref(0);
    const countAdd = () => {
      count.value++;
    };
    const countRemove = () => {
      count.value = 0;
    };
    return {
      todo, items, add, remove, countAdd, countRemove, count,
    };
  },
};
</script> -->

<style>

</style>
