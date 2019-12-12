import React from 'react'
import { SearchBox, SearchLable, SearchInput, SearchButton } from './SearchStyled'


export default function Search() {
    return (
        <SearchBox>
            <SearchLable>Search</SearchLable>
            <SearchInput placeholder='Beef, Chicken, Vegetarian'/>
            <SearchButton><i className="fas fa-search fa-lg"></i></SearchButton>
        </SearchBox>
    )
}
