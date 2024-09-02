<template>
  <div>
    <h1>Todo List</h1>
    <input v-model="newTodo" @keyup.enter="addTodo">
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo.text }}
        <button @click="editTodo(index)">Edit</button>
        <button @click="deleteTodo(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: '',
      todos: []
    }
  },
  methods: {
    addTodo() {
      this.todos.push({ text: this.newTodo });
      this.newTodo = '';
    },
    editTodo(index) {
      let todo = this.todos[index];
      let newTodo = prompt('Edit Todo', todo.text);
      if (newTodo) {
        this.todos.splice(index, 1, { text: newTodo });
      }
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    }
  }
}
</script>
<style scoped>
.todo-list {
  background-color: #26097d; /* Change this to your preferred background color */
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  margin: 50px auto;
  box-shadow: 0px 0px 10px rgba(29, 5, 102, 0.1);
}

h1 {
  color: #101481;
  font-size: 2em;
  text-align: center;
}

input {
  display: block;
  margin: 20px auto;
  padding: 10px;
  font-size: 1em;
  width: 80%;
  border: 1px solid #230404;
  border-radius: 4px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #0e0303;
  border-radius: 4px;
}

button {
  margin-left: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}


</style>
