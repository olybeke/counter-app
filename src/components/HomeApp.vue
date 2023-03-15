<template>

    <section class='home__app'>
        <div class="text_box">
            <h1 class="heading_main">
                Counter App
            </h1>
            <p class="heading_sub">
                This is a counter app built with VueJS. It was created to perform counts using increments, decrements, reset and set Value function.
            </p>
            <div class="button_wrap">
                <button class="btn counter"><router-link to="/counter">Counter</router-link></button>
                <button class="btn git"><a href="https://github.com/olybeke/counter-app">GitHub</a></button>
            </div>
        </div>
        <div class="image__wrap">
            <img src="../assets/data.svg" alt="">
        </div>
    </section>

</template>

<style>
section{
    width: 900px;
    background-color: lightcyan;
    margin: 0 auto;
    max-width: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 2rem;
}
.text_box{
    display: flex;
    justify-content: center;
    align-items: left;
    text-align: left;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
}
.heading_main{
    font-size: 90px;
    font-weight: 600;
    color: #333;

}
.heading__sub{
    font-size: 40px;
    color: #555;
    font-weight: bolder;
    line-height: 1.7;
}
.button_wrap{
    margin-top: 3rem;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
}
.btn{
    padding: 14px 16px;
    width: 40%;
    border: none;
    outline: none;
    border-radius: 10px;
    background-color: rgb(17, 17, 198);
    
}
.btn a{
    color: white;
    font-weight: bolder;
    font-size: 1.6rem;
}
.image__wrap{
    width: 95%;
    margin: 0 auto;
    animation: scale 2s infinite ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
}
.image__wrap img{
    width: 100%;
}

@media screen and (max-width: 600px) {
    section{
        display: grid;
        grid-template-columns: 1fr;
    }
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