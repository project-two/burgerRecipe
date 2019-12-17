import React from 'react'
import RecipeCard from './RecipeCard';
import { RecipesContainer } from './RecipeCardStyled'

const RecipeList = (props) => {

    return (
        <div>
            <RecipesContainer>
                {props.recipe.map((recipe, index) => 
                    <RecipeCard 
                    image={recipe.url}
                    burgerName={recipe.name}
                    recipeId={recipe.id}
                    username={props.username[index]}
                    />
               )}
            </RecipesContainer>
        </div>
    )
}

export default RecipeList