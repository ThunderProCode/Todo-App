import React from "react";
import { TodoCounter } from "./Components/TodoCounter/TodoCounter";
import { TodoSearch } from "./Components/TodoSearch/TodoSearch";
import { TodoList } from "./Components/TodoList/TodoList";
import { TodoItem } from "./Components/TodoItem/TodoItem";
import { CreateTodoButton } from "./Components/CreateTodoButton/CreateTodoButton";
import { Header } from "./Components/Header/Header";

import './App.css';

const defaultTodos = [
  { text:'Test this app 😁',
    completed: true
  },
  { text:'Aprender React',
    completed: false
  },
  { text:'Llorar con la llorona',
    completed: false
  }
];

function App() {
  
  const [ todos, setTodos ] = React.useState(defaultTodos);
  const [  searchValue, setSearchValue ] = React.useState('');
  
  const completedTodos = todos.filter( todo => !!todo.completed ).length;
  const totalTodos = todos.length;
  
  let searchedTodos = [];

  if( !searchValue.length >= 1 ) {
    searchedTodos = todos;
  } else {

    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const toggleTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];

    if( newTodos[todoIndex].completed ) {
      newTodos[todoIndex].completed = false;
    }else {
      newTodos[todoIndex].completed = true;
    }
    setTodos( newTodos );
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex( todo => todo.text === text );
    const newTodos = [...todos];

    newTodos.splice(todoIndex,1);
    setTodos( newTodos );
  }

  return (
    <React.Fragment>
      <main className="main-container">
          <TodoCounter 
            total={ totalTodos }
            completed={ completedTodos }
          />
          <TodoSearch 
            searchValue={ searchValue }
            setSearchValue={ setSearchValue }
          />
          
          <TodoList>
            { searchedTodos.map( todo => (
                <TodoItem 
                  key={todo.text} 
                  text={todo.text} 
                  completed={todo.completed}
                  deleteTodo={ ()=> deleteTodo(todo.text) }
                  toggleTodo={ () => toggleTodo(todo.text) }
                />
              ))
            }
          </TodoList> 
          
          <CreateTodoButton />
      </main>
    </React.Fragment>
  );
}

export default App;
