import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div>
            <input type='search' 
            placeholder='search robots' 
            onChange={searchChange}
            className = 'pa3 bg-lightest-blue ba ma3 mb4' />
        </div>
    )
}

export default SearchBox;