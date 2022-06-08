import { ref } from 'vue';

export const todo = ref('');
export const items = ref(['Vue', 'is', 'Awesome']);
export const add = () => {
  if (todo.value) {
    items.value.push(todo.value);
    todo.value = '';
  }
};
export const remove = (item) => {
  items.value = items.value.filter((v) => v !== item);
};
