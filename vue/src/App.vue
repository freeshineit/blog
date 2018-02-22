<template>
  <div id="app">
    <div class="sibe">
      <ul>
        <li>
          <router-link to='/directive'>
            指令
          </router-link>
        </li>
      </ul>
    </div>
    <div class="containter">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
  clear:both;
}

.sibe{
  padding-left: 30px;
  width: 15%;
  float: left;
  border-right: 1px solid #ccc;
  box-sizing: border-box;
}

.containter{
  width: 85%;
  float: right;
  padding-left: 20px;
  box-sizing: border-box;
}

</style>
