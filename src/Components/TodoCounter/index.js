import React from "react";
import './styles.css';

function TodoCounter( { totalTodos, completedTodos, loading } ) { 
    return (
        <h2 
            className={`TodoCounter ${!!loading && "TodoCounter--loading" }`} 
        >
            ✅ { completedTodos } out of { totalTodos } tasks completed
        </h2>
    );
}

export { TodoCounter };