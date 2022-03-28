import React from "react";
import { TodoContext } from "../../app/TodoContext";
import './styles.css';

function TodoSearch () {

    const { searchValue, setSearchValue } = React.useContext( TodoContext );

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }

    return(
        <section className="todo-search">
            <input  
                className="searchbar" 
                placeholder="Type here"
                value={ searchValue }
                onChange={ onSearchValueChange }
            />
            <button type="button" className="search-button">Search</button>
        </section>
    );
}

export { TodoSearch }