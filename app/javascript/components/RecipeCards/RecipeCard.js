import React from "react";
import { RecipeImage,RecipeCardContainer,RecipeDetailsContainer,RecipeDetails,RecipeLink} from "./RecipeCardStyled";



function RecipeCard(props) {
  return (
    <RecipeCardContainer>
        <RecipeLink to='/recipe/:recipe_id'> 
            <RecipeImage src={props.image} /> {/* props.image */}
            <RecipeDetailsContainer>
                <RecipeDetails>The Big Juciy</RecipeDetails> {/* props.burgerName */}
                <RecipeDetails light>by username</RecipeDetails> {/* props.username */}
                <RecipeDetails light><i className="far fa-thumbs-up"></i> 55 </RecipeDetails>{/* props.likes */}
            </RecipeDetailsContainer>
        </RecipeLink>
    </RecipeCardContainer>
  );
}

export default RecipeCard;
