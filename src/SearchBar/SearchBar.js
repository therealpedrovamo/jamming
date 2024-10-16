import React from 'react';

function SearchBar(props){
    return (
        <>
            <input type='text' placeholder='Look for a song' value={props.searchedTerm} onChange={props.onChange}/>
            <input type='button' value='Search' onClick={props.onSearch}/>
        </>
    )
}

export default SearchBar;