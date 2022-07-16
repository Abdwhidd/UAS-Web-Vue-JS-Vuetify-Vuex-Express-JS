import axios from 'axios';

const state = {
  users: []
};

const getters = {
  allUser: (state) => {
    return state.users
  }
};

const actions = {
  async fetchUsers({ commit }) {
    const response = await axios.get('http://localhost:5000/users');

    commit('setTodos', response.data);
  },

  async deleteTodo({ commit }, id) {
    await axios.delete(`http://localhost:5000/deleteUser${id}`);

    commit('removeTodo', id);
  },

  async updateTodo({ commit }, updatedTodo) {
    const response = await axios.put(`http://localhost:5000/UpdateUser${updatedUser.id}`, updatedUser);

    commit('updateUser', response.data);
  },

  async createUser({commit},title){
      const response = await axios.post(`http://localhost:5000/createUser`,
      {title:title,completed:false})

      commit('createUser',response.data)
  },

  async filterUser({ commit }, event) {
    // Get the limit
    const limit = parseInt(event.target.options[event.target.options.selectedIndex].innerText);
    
    // Request
    const response = await axios.get(`http://localhost:5000/users`);

    commit('setUser', response.data);
  }
}

const mutations = {
    setTodos: (state, users) => (state.users = users),
    removeTodo:(state,id) => state.users = state.users.filter((user) => user.id !== id),
    updateTodo: (state, updatedUser) => {
        // Find index
        const index = state.users.findIndex(user => user.id === updatedUser.id);
    
        if (index !== -1) {
          state.users.splice(index, 1, updatedUser);
        }
    },
    createUser:(state,newUser) => state.users.unshift(newUser)
};


export default {
    state,
    getters,
    actions,
    mutations
};