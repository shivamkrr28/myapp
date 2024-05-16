import React from 'react'; import './App.css';

class Child extends React.Component {
   constructor(props) { 
    super(props);
     this.state = { todos: [] }; 
     this.addTodo = this.addTodo.bind(this); 
     this.updateTodo = this.updateTodo.bind(this); 
    }

addTodo(event) {
   event.preventDefault(); 
   const todo = event.target.value; 
   const todos = [...this.state.todos, todo]; 
   this.setState({ todos }); 
  }

}

export default Child;