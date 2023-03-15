import { useStore } from 'vuex';
import { computed } from 'vue'

export default function useCounter() {
  const store = useStore();
  
  const count = computed(() => store.state.count)

  function increment() {
    store.commit('increment');
  }

  function decrement() {
    store.commit('decrement');
  }

  function setValue(value) {
    store.commit('setValue', value);
  }

  function reset() {
    store.commit('reset');
  }

  return {
    increment,
    decrement,
    setValue,
    reset,
    count,
  };
}
