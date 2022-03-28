import React from "react";
import { TodoContext } from "../../app/TodoContext";
import './styles.css';

function TodoCounter( { total, completed } ) { 
    const { totalTodos, completedTodos } = React.useContext( TodoContext ); 

    return (
        <h2 className="TodoCounter" >✅ { completedTodos } out of { totalTodos } tasks completed</h2>
    );
}

export { TodoCounter };