import React from "react";
import './TodoList.css';
import { AiFillPlusSquare } from 'react-icons/ai';

function TodoList(props) {
    return (
        <section className="todo-list-container">
            <ul className="todo-list">
                <div className="todo-list-header" >
                    Todo-List
                    <AiFillPlusSquare
                        className="add-icon"
                    />
                </div>
                <div className="todo-list-items">
                    {props.children}
                </div>
            </ul>
        </section>
    );
}

export { TodoList } 