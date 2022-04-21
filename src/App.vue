<template>
  <div id="third-app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h3> Welcome to Your Third Sub Component </h3>
    <h4> This is Vue 3 ! </h4>
  </div>
</template>

<script>
export default {
  name: 'ThirdApp',
}
</script>

<style>
#third-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
