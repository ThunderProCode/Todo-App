import React from "react";
import { TodoContext } from "../../Hooks/useTodos";
import './styles.css';

function TodoSearch ({ searchValue, setSearchValue }) {

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }

    return(
        <section className="todo-search">
            <input  
                className="searchbar" 
                placeholder="Search for Todos"
                value={ searchValue }
                onChange={ onSearchValueChange }
            />
            <button type="button" className="search-button">Search</button>
        </section>
    );
}

export { TodoSearch }