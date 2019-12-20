import React from 'react'
import { SearchBox, SearchLable, SearchInput, SearchButton } from './SearchStyled'


export default function Search(props) {
 
    
    return (
        <SearchBox>
            <SearchLable>Search</SearchLable>
            <SearchInput placeholder='Beef, Chicken, Vegetarian' onChange={props.handleSearch}/>
            <SearchButton><i className="fas fa-search fa-lg"></i></SearchButton>
        </SearchBox>
    )
}
