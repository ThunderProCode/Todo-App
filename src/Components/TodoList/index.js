import React from "react";
import './styles.css';
import { AiFillPlusSquare } from 'react-icons/ai';
import { TodoContext } from "../../app/TodoContext";

function TodoList(props) {

    const { openModal, setOpenModal } = React.useContext( TodoContext );

    return (
        <section className="todo-list-container">
            <ul className="todo-list">
                <div className="todo-list-header" >
                    Todo-List
                    <AiFillPlusSquare
                        className="add-icon"
                        onClick={ () => setOpenModal(true) }
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