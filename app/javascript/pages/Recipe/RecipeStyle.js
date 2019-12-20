import styled from "styled-components";


export const RecipeContainer = styled.div`
  margin: 50px;
  display: flex;
  flex-wrap: wrap;
`
export const PostDetailsContainer = styled.div`
  width: 50%;
  margin: 2%;

  @media (max-width: 768px) {
    width: 100%;
  }
`
export const PostMethodContainer = styled.div`
  width: 40%;
  margin: 12% 2% 0;

  @media (max-width: 768px) {
    width: 100%;
    margin: 2.5%;
  }

`
export const RecipeImage = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: cover;
`;

export const BurgerName = styled.h1 `
  font-size: 2rem;
  font-family: 'Pacifico', cursive;
`
export const LikesContainer = styled.div`
  margin: 10px;
`

export const RecipeHeading = styled.h4`
  font-size: 2rem;  
  color: #ccc;
  margin: 20px 0;
`
export const Liked = styled.i`
  
`