<template>
    <section class="section">
      <div class="image">
        <img src="@/assets/err.svg" alt="" />
    </div>
      <h1><span class='color'>Ooppss!! </span>404 Not Found</h1>
      <p>The page you are looking for does not exist.
        <button class='submit-button'><router-link to="/counter">Return</router-link></button>
      </p>
    </section>
  </template>
  

  <style>
  .section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    max-width: 100%;
    padding: 2rem;
    margin: 0 auto;
    background-color: lightcyan;
    font-family: Arial, sans-serif;
  }
  .color{
   color: rgba(0, 0, 255, 0.627);
  }
  h1{
    
  font-size: 5rem;
  margin: 0;
  color: #333;
  }
  p{
    font-size: 1.6rem;
  }
  .submit-button{
    width: 10rem;
    padding: 1rem;
    outline: none;
    border: none;
    border-radius: 5px;
    background: rgba(0, 0, 255, 0.627);
  }
  button a{
    color: white;
    font-size: 1.6rem;
    font-weight: bolder;
    text-decoration: none;
  }
  .image{
    width: 300px;
    height: 300px;
    margin-top: 40px;
    animation: scale 2s infinite ease-in-out;
  }
  img{
    width: 100%;
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