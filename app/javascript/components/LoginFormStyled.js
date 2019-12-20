import styled from 'styled-components'

export const LoginFormBG = styled.div`
    display: flex;
    justify-content: center;
    background-image: url('https://images.unsplash.com/photo-1525164286253-04e68b9d94c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80');
    height: 100vh;
    background-position: center ; 
    background-repeat: no-repeat;
    background-size: cover;
`
export const LoginFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* background-color: #fff; */
    height: 40vh;
    width: 300px;
    /* margin: 20px 0; */
    padding: 30px;

    & p {
        color: red;
    }

    & input {
        border: none;
        border-bottom: 4px solid #fff;
        padding: 10px 0 5px 0;
        margin: 10px 0;
        font-size: 1.4rem;
        font-weight: 300;
        background-color: transparent;
        color: #fff;

        &::placeholder {
            color: #fff;
        }

        &:focus {
            outline: none;
        }
    };

    & lable {
        display: none;
    }

    & button {
        padding: 10px;
        width: 100%;
        border: none;
        font-family: "Montserrat";
        font-weight: 700;
        font-size: 1rem;
        cursor: pointer;
    }

   
`
