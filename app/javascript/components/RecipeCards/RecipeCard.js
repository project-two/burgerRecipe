import React from "react";
import PropTypes from 'prop-types';
import Likes from '../../pages/Likes/Likes'
import { RecipeImage,RecipeCardContainer,RecipeDetailsContainer,RecipeDetails,RecipeLink} from "./RecipeCardStyled";


function RecipeCard(props) {

    return (
        <RecipeCardContainer>
            <RecipeLink to={`/recipe/${props.recipeId}`}> 
                <RecipeImage src={props.image} />
                <RecipeDetailsContainer>
                    <RecipeDetails>{props.burgerName}</RecipeDetails>  
                    <RecipeDetails light>{props.username}</RecipeDetails>
                </RecipeDetailsContainer>
            </RecipeLink>
            <RecipeDetailsContainer> <Likes recipe_id={props.recipeId} /></RecipeDetailsContainer>
           
            {/* light><i className="far fa-thumbs-up"></i> {props.likes}</RecipeDetails> */}
        </RecipeCardContainer>
    );
}



// RecipeCard.propTypes = {
//   image: PropTypes.string.isRequired,
//   burgerName: PropTypes.string.isRequired,
//   username: PropTypes.string.isRequired,
//   likes: PropTypes.number.isRequired,
// };

export default RecipeCard;
