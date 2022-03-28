import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton (props) {


    const buttonClick = (msg) => {
        alert(msg);
    }

    return (
        
        <button 
            className="add-todo-button"
            onClick={ () => buttonClick('Aqui se deberia abrir el modal') }
        >
            +
        </button>
    
    );
}

export { CreateTodoButton } 