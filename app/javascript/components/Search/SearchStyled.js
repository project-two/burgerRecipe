import styled from 'styled-components';

export const SearchBox = styled.div`
    display: flex;
    align-items: center;
    border-radius: 20px;
    background-color: #fff;
    padding: 5px;
    width: 50%;
    -webkit-box-shadow: 8px 8px 10px -5px rgba(51,51,51,1);
    -moz-box-shadow: 8px 8px 10px -5px rgba(51,51,51,1);
    box-shadow: 8px 8px 10px -5px rgba(51,51,51,1);
`; 

export const SearchLable = styled.label`
    font-weight: 700;
    color: rgb(70, 70, 70);
    margin: 0 10px;
`; 

export const SearchInput = styled.input`
    width: 100%;
    border: none;
    font-size: 1rem;
    color: rgb(70, 70, 70);
    &:focus {
        outline: none;
    }
    &::placeholder {
        color: #999;
    }
`;

export const SearchButton = styled.button`
    align-self: flex-end
    width: 30px;
    height: 30px;
    margin: 0 10px
    border: none;
    cursor: pointer;
`