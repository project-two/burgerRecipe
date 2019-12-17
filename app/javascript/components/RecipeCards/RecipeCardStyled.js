import styled from "styled-components";
import { Link } from "@reach/router";

// RecipeCardList styles
export const RecipesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

// RecipeCard styles
export const RecipeCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 20%;
  margin: 1%;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 900px) {
    width: 30%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const RecipeImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;
export const RecipeDetailsContainer = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-top: none;
`;

export const RecipeDetails = styled.p`
  font-weight: ${(props) => (props.light ? "300" : "700")};
  margin: 5px;
`;

export const RecipeLink = styled(Link)`
  text-decoration: none;
  color: rgb(70, 70, 70);
`;

