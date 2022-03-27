import React from "react";
import './TodoSearch.css';

function TodoSearch ( { searchValue, setSearchValue } ) {

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
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