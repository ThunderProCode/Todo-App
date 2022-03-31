import React from "react";
import { TodoContext } from "../../Hooks/useTodos";
import './styles.css';

function TodoSearch ({ searchValue, setSearchValue,loading }) {

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
                disabled={loading}
            />
        </section>
    );
}

export { TodoSearch }