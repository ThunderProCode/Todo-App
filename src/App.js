import React from "react";
import { TodoCounter } from "./Components/TodoCounter/TodoCounter";
import { TodoSearch } from "./Components/TodoSearch/TodoSearch";
import { TodoList } from "./Components/TodoList/TodoList";
import { TodoItem } from "./Components/TodoItem/TodoItem";
import { CreateTodoButton } from "./Components/CreateTodoButton/CreateTodoButton";

import './App.css';

const todos = [
  { text:'Cortar cebolla',
    completed: false
  },
  { text:'Aprender React',
    completed: false
  },
  { text:'Llorar con la llorona',
    completed: false
  }
];

function App() {
  return (
    <div className="main-container">
        <TodoCounter />
        <TodoSearch />
        
        <TodoList>
          { todos.map( todo => (
              <TodoItem key={todo.text} text={todo.text} />
            ))
          }
        </TodoList> 
        
        <CreateTodoButton />

    </div>
  );
}

export default App;
