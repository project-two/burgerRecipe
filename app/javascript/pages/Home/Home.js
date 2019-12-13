import React from "react";
import { HomeHeroSection } from "./HomeStyled";
import { Container, Logo, H1 } from "../../components/GlobalStyles/GlobalStyles";
import Search from "../../components/Search/Search";
import RecipeList from '../../components/RecipeCards/RecipeList'

const Home = () => {
  return (
    <React.Fragment>
      <HomeHeroSection>
        <Logo>JuicyB</Logo>
        <Search />
      </HomeHeroSection>
     
      <Container><H1>Popular Recipes</H1></Container>
      <Container> 
        <RecipeList />
      </Container>
      
    </React.Fragment>
  );
};

export default Home;
