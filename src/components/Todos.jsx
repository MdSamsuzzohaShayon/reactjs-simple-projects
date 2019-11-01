import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  markComplete = (e) => {
    console.log("Hello");
  }
  render() {
    // console.log(this.props.todos.title);
    return this.props.todos.map((todo) => (
      // <h1>{todo.title}</h1>
       <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
