import React from "react";
import './styles.css';
import { AiFillCheckSquare } from "react-icons/ai";
import { AiOutlineBorder } from "react-icons/ai";


function TodoItem (props) {

    return (
        <li className="todo-item">
            <span 
                className="checkbox-description-container"
                onClick={ props.toggleTodo }
            >
                { props.completed ? <AiFillCheckSquare className="check-icon"/> : <AiOutlineBorder className="check-icon"/> }
                <p className={ props.completed ? 'clicked' : 'unclicked' } >{props.text}</p>
            </span>
            <span 
                className="delete-icon-container"
                onClick={ props.deleteTodo }
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill delete-icon" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
            </span>
        </li>
    );
}

export { TodoItem }