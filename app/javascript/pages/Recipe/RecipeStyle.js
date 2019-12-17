import styled from "styled-components";

export const RecipeImage = styled.img`
  width: 300px;
`;

export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px;

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
