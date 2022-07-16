<template>
  <div>
    <h3>Create User</h3>
    <div class="create">
      <form @submit="onSubmit">
        <input type="text" v-model="title" placeholder="Create User" />
        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "createUser",
  data() {
    return {
      title: ''
    }
  },
  methods: {
    ...mapActions(["createUser"]),
    onSubmit(event) {
      event.preventDefault();
      this.createUser(this.title);

      this.title = '';
    }
  }
}
</script>

<style scoped>
  form {
    display: flex;
  }

  input[type="text"] {
    flex: 10;
    padding: 10px;
    border: 1px solid #41b883;
    outline: 0;
  }

  input[type="submit"] {
    flex: 2;
    background: #41b883;
    color: #fff;
    border: 1px solid #41b883;
    cursor: pointer;
  }
</style>