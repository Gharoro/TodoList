import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';

class App extends Component {
  state = {
    todos: [ 
      {
        id: 1,
        title: 'Learn React.js',
        completed: false
      },
      {
        id: 2,
        title: 'Build a front-end app with React',
        completed: false
      },
      {
        id: 3,
        title: 'Learn Node.js and Express.js',
        completed: false
      },
      {
        id: 4,
        title: 'Build a full-stack MERN application',
        completed: false
      }
    
    
    ]
  }
  //Toggle Complete
  markComplete = (id) => {  
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }
  //Delete Todo
  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  //Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: 4,
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }
  render() {
    return (
      <div className="App">
      <div className="container">
        < Header />
        < AddTodo addTodo={this.addTodo} />
         <Todos todos={this.state.todos} markComplete={this.markComplete}
         deleteTodo={this.deleteTodo} />
      </div>
      </div>
    );
  }
}

export default App;
