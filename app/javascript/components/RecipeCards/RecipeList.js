import React from 'react'
import RecipeCard from './RecipeCard';
import { RecipesContainer } from './RecipeCardStyled'

const RecipeList = (props) => {

    return (
        <div>
            <RecipesContainer>
                {props.recipe.map((recipe) => 
                    <RecipeCard 
                    image={recipe.url}
                    burgerName={recipe.name}
                    recipeId={recipe.recipe_id ? recipe.recipe_id : recipe.id}
                    username={recipe.username}
                    likes={recipe.like_count}
                    key={recipe.id}
                    />
               ) 
            }
            </RecipesContainer>
        </div>
    )
}

export default RecipeList