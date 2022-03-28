import React from "react";
import { TodoContext } from "./TodoContext";
import { TodoCounter } from "../Components/TodoCounter";
import { TodoSearch } from "../Components/TodoSearch";
import { TodoList } from "../Components/TodoList";
import { TodoItem } from "../Components/TodoItem";
import './styles.css';

function AppUI (){
    const { 
        error,
        loading,
        searchedTodos,
        toggleTodo,
        deleteTodo 
    } = React.useContext( TodoContext );

    return (
        <main className="main-container">
            <TodoCounter/>
            <TodoSearch/>
                <TodoList>
                    { error && <p className="message" >Error ocurred</p> }
                    { loading && <p className="message">Loading... Please wait</p> }
                    { (!loading && !searchedTodos.length) && <p className="message">Create your first ToDo</p>}
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
        </main>
    );
}

export { AppUI };