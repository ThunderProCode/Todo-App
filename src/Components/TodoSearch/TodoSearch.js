import React from "react";
import './TodoSearch.css';

function TodoSearch () {
    return(
        <div className="todo-search">
            <input  className="searchbar" placeholder="Type here"></input>
            <button type="button" className="search-button">Search</button>
        </div>
    );
}

export { TodoSearch }