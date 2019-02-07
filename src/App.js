import React, { Component } from 'react';
import Todos from './Todos.js'
import AddTodo from './AddTodo.js'

class App extends Component {
  state = {
    todos: [
      {id: 1, content:'buy milk'},
      {id: 2, content:'buy bread'}
    ]
  }

  deleteItem = (id) =>{
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos: todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="container">
        <h1 className="center blue-text">Todo's</h1>
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
