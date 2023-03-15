<template>
  <div class="counter">
    <div class="image">
        <img src="@/assets/data.svg" alt="" />
    </div>
    <h1>{{ count }}</h1>
    <div class="buttons">
      <button class="button increment" @click="increment">+</button>
      <button class="button decrement" @click="decrement">-</button>
      <button class="button reset" @click="reset">Reset</button>
    </div>
    <div class="input-container">
      <input type="number" id="value" v-model="value"  />
      <input class='submit' type='submit' @click='setValue(value)' value='Set Value' />
    </div>
  </div>
</template>
  
  <script>
  import useCounter from '@/composables/counter.js';
  
  export default {
    setup() {
      const { count, increment, decrement, reset, setValue } = useCounter();
      // let value = 0;
  
      return {
        count,
        increment,
        decrement,
        reset,
        setValue,
        value: 0,
      };
    },
  };
  </script>
  
  <style scoped>
.counter {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  max-width: 100%;
  background-color: lightcyan;
  font-family: Arial, sans-serif;
}

.image{
  width: 300px;
  height: 300px;
  margin-top: 80px;
  animation: scale 2s infinite ease-in-out;
}
img{
  width: 100%;
}
h1 {
  font-size: 5rem;
  margin: 0;
  color: #333;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  width: 400px;
  justify-content: center;
  align-items: center;
}

.button {
  font-size: 1.4rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  margin: 1rem;
  transition: background-color 0.3s ease-in-out;
}

.increment {
  background-color: #00b894;
  color: white;
}

.increment:hover {
  background-color: #00a882;
}

.decrement {
  background-color: #d63031;
  color: white;
}

.decrement:hover {
  background-color: #c92b2b;
}

.reset {
  background-color: #6c5ce7;
  color: white;
}

.reset:hover {
  background-color: #5b4bc4;
}

.input-container {
  margin-top: 2rem;
}

label {
  font-size: 2rem;
  margin-right: 1rem;
}

input[type='number'] {
  font-size: 1.6rem;
  padding: 1.4rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease-in-out;
  width: 20rem;
}

input[type='number']:focus {
  outline: none;
  box-shadow: 0 0 1rem rgba(108, 92, 231, 0.5);
}
input[type='submit']{
  width: 10rem;
  border: none;
  border-radius: 0.5rem;
  outline: none;
  background: lightskyblue;
  color: black;
  padding: 1.4rem;
  font-size: 1.6rem;
  margin: 2rem;
  font-weight: bolder;
}
input[type='submit']:hover{
  transition: all 0.4s;
  color: white;
  background-color: rgba(0, 0, 255, 0.559);
}

@keyframes scale {
  0% {
    scale: 0.9;
  }
  50% {
    scale: 1.08;
  }
  100%{
    scale: 0.9;
  }
}
</style>