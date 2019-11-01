import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';


import './App.css';


// https://www.youtube.com/watch?v=sBws8MSXN7A&t=6s

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: true
      },
      {
        id: 3,
        title: 'Go to University',
        completed: false
      }
    ]
  }



  //TOGGLE COMPLETE
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      } 
      return todo;
    })})
  }


  delTodo =(id)=>{
    // console.log(id);
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !==id)]});
  }

  addTodo =(title)=>{
    const newTodo ={
      id: 4,
      title,
      completed: false
    };
    this.setState({todos: [...this.state.todos, newTodo]});
  }


  render() {
    // console.log(this.state.todos);
    return (
      <div className="App">
      <Header />
        <div className="container">
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
