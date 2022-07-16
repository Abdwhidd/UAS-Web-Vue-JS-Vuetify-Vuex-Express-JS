<template>
  <div id="app">
    <AddUser />
    <FilterUser/>
    <User />
  </div>
</template>

<script>
import createUser from './components/CreateUser.vue'
import Users from './components/User.vue'
import FilterUser from './components/FilterUser.vue'

export default {
  name: 'App',
  components: {
    createUser,
    Users,
    FilterUser
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
