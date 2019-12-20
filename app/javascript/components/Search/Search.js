import React from 'react'
import { SearchBox, SearchLable, SearchInput, SearchButton } from './SearchStyled'


export default function Search() {
    
    const handleSearch = () => { 
        
    }
    
    return (
        <SearchBox>
            <SearchLable>Search</SearchLable>
            <SearchInput placeholder='Beef, Chicken, Vegetarian' onChange={handleSearch}/>
            <SearchButton><i className="fas fa-search fa-lg"></i></SearchButton>
        </SearchBox>
    )
}
