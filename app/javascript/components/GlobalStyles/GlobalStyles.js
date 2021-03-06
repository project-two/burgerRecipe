import styled from 'styled-components'
import { Link } from "@reach/router"

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 40px 20px
`
export const H1 = styled.h1`
    font-size: ${props => props.lg ? '3rem': '1.6rem' };
    font-family: ${props => props.logo ? 'Pacifico': 'Montserrat' };
    text-align: ${props => props.center ? 'center': 'none' };
    margin: ${props => props.margin ? '0px': '' };
    color: ${props => props.light ? '#fff': '' };
    
`
export const Logo = styled.h1`
    font-family: 'Pacifico', cursive;
    color: #fff;
    font-size: 5rem;
    margin: 0 0 50px;
`
export const StyledLink = styled(Link)`
    font-family: ${props => props.logo ? 'Pacifico': 'Montserrat' };
    font-weight: 700;
    text-decoration: none !important;
    color: rgb(70, 70, 70);
    margin: 0 15px;
    &:hover {
        color: #000;
    }
`

