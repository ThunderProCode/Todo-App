import React from "react";
import './styles.css';

function TodoCounter( { totalTodos, completedTodos } ) { 
    return (
        <h2 className="TodoCounter" >✅ { completedTodos } out of { totalTodos } tasks completed</h2>
    );
}

export { TodoCounter };