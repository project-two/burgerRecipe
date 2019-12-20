import styled from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 30px;  
    

    & form {



        & input {
            padding: 10px 0;
            width: 100%;
            margin-bottom: 10px;
        }
    }

    & table {
        width: 100%;

    }

    & div {
        margin: 5px 0;
        font-weight: bold;
    }

    & button {
        padding: 10px;
        width: 48%;
        border: 1px black solid;
        font-family: "Montserrat";
        font-weight: 700;
        font-size: 1rem;
        cursor: pointer;
    }

    & input[type="submit" i] {
        padding: 10px;
        width: 100%;
        border: 1px solid black;
        font-family: "Montserrat";
        font-weight: 700;
        font-size: 1rem;
        cursor: pointer;
    }

    & select {
    
    background-color: rgb(255, 255, 255);
    font-family: "Montserrat";
    font-size: 12px;
    border: solid 1px #ccc;
    margin-left: 5px;
    }
`

export const ButtonContainer = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center;
`