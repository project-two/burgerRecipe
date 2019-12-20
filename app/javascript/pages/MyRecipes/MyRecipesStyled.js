import styled, {css} from 'styled-components'

export const RecipesToggleButton = styled.button`
    margin: 20px;
    width: 200px;
    padding: 10px;
    font-size: 1rem;
    border: none;
    color: ${(props) => (props.active === true ? "rgb(70,70,70);" : "#ccc;")};
    border-bottom: ${(props) => (props.active === true ? "2px solid rgb(70,70,70);" : "2px solid #ccc;")};
    border-top: ${(props) => (props.active === true ? "2px solid rgb(70,70,70);" : "2px solid #ccc;")};

    &:hover {
        cursor: pointer;
    }
    &:focus {
        outline: none;
    }
`