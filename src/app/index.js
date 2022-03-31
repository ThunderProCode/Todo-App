import React from "react";
import { useTodos } from "../Hooks/useTodos"; 

import { TodoCounter } from "../Components/TodoCounter";
import { TodoSearch } from "../Components/TodoSearch";
import { TodoList } from "../Components/TodoList";
import { TodoItem } from "../Components/TodoItem";
import { Modal } from "../Components/Modal";
import { TodoForm } from "../Components/TodoForm";
import { Header } from "../Components/Header";
import { ErrorMessage } from "../Components/ErrorMessage";
import { LoadingMessage } from "../Components/LoadingMessage";
import { SuccessMessage } from "../Components/SuccessMessage/SuccessMessage";

import './styles.css';

function App() {

  const { 
    error,
    loading,
    searchedTodos,
    toggleTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo
} = useTodos();

return (
  <>
      <Header/>
        <main className="main-container">
          <TodoCounter
              totalTodos = {totalTodos}
              completedTodos = {completedTodos}
              loading={loading}
          />
          <TodoSearch
              searchValue = {searchValue}
              setSearchValue = {setSearchValue}
              loading={loading}
          />

          <TodoList
            error={error}
            loading={loading}
            openModal={openModal}
            totalTodos={totalTodos}
            searchText={searchValue}
            setOpenModal={setOpenModal}
            searchedTodos={searchedTodos}

            onError={ () => <ErrorMessage className="message"/> }
            onLoading={() => <LoadingMessage className="message"/>}
            onEmpty={() => <SuccessMessage className="message" /> }
            onEmptySearchResults={
                (searchText) => <p> No results for {searchText} </p>
            }   
          >
              {
                todo => (
                <TodoItem 
                    key={todo.text} 
                    text={todo.text} 
                    completed={todo.completed}
                    deleteTodo={ ()=> deleteTodo(todo.text) }
                    toggleTodo={ () => toggleTodo(todo.text) }
                />) 
              }
          </TodoList>

          {!!openModal && (
              <Modal>
                  <TodoForm
                    addTodo={addTodo}
                    setOpenModal={setOpenModal}
                  />
              </Modal>
          )}
      </main>
  </>
);
}

export default App;


