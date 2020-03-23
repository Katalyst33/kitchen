<template>
  <div id="app">
    <NavBar/>
    <router-view/>
    <FooterArea/>

  </div>
</template>

<style lang="scss">


  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  #app {
    font-family: 'Roboto', sans-serif;
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>



