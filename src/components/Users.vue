
<template>
  <div>
    <h3>User</h3>
    <div class="legend">
      <span>Double click to mark as complete</span>
      <span>
        <span class="incomplete-box"></span> = Incomplete
      </span>
      <span>
        <span class="complete-box"></span> = Complete
      </span>
    </div>
    <div class="users">
      <div
        @dblclick="onDblClick(user)"
        :key="user.id"
        v-for="user in allUsers"
        class="user"
        v-bind:class="{'is-complete':user.completed}"
      >
        {{ user.title }}
        <i class="fas fa-trash-alt" v-on:click="deleteTodo(user.id)"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: "Users",
  methods:{
      ...mapActions(["fetchUsers","deleteUser","updateUser"]),
      onDblClick(user) {
      const updatedTodo = {
        id: user.id,
        title: user.title,
        completed: !user.completed
      }
      this.updateUser(updatedUser);
    }
  },
  computed: mapGetters(["allUsers"]),
  created() {
    this.fetchUsers();
  }
};
</script>

<style scoped>
  .todos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
  .todo {
    border: 1px solid #ccc;
    background: #41b883;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
  }
  i {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #fff;
    cursor: pointer;
  }
  .legend {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
  }
  .complete-box,
  .incomplete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
  }
  .complete-box {
    background: #35495e;
  }
  .incomplete-box {
    background: #41b883;
  }
  .is-complete {
    color: #fff;
    background: #35495e;
  }
  @media (max-width: 500px) {
    .todos {
      grid-template-columns: 1fr;
    }
  }
</style>
