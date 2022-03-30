import React from "react";
import './styles.css';
import { AiFillPlusSquare } from 'react-icons/ai';

function TodoList(props) {

    return (
        <section className="todo-list-container">

            <ul className="todo-list">

                <div className="todo-list-header" >
                    Todo-List
                    <AiFillPlusSquare
                        className="add-icon"
                        onClick={ () => props.setOpenModal(true) }
                    />
                </div>

                {props.error && props.onError()}
                {props.loading && props.onLoading()}
                {(!props.loading && !props.totalTodos) && props.onEmpty()}
                {( !!props.totalTodos && !props.searchedTodos.length ) && props.onEmptySearchResults(props.searchText)}

                <div className="todo-list-items">
                    {props.searchedTodos.map(props.render)}
                </div>

            </ul>

        </section>
    );
}

export { TodoList } 