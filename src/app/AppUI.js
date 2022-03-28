import React from "react";
import { TodoContext } from "./TodoContext";
import { TodoCounter } from "../Components/TodoCounter";
import { TodoSearch } from "../Components/TodoSearch";
import { TodoList } from "../Components/TodoList";
import { TodoItem } from "../Components/TodoItem";
import { Modal } from "../Components/Modal";
import './styles.css';
import { TodoForm } from "../Components/TodoForm";

function AppUI (){
    const { 
        error,
        loading,
        searchedTodos,
        toggleTodo,
        deleteTodo,
        openModal,
        setOpenModal
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
                    />))
                }
            </TodoList> 
            {!!openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
            )}
        </main>
    );
}

export { AppUI };