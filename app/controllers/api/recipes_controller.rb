class Api::RecipesController < ApplicationController
  def index
    if request.query_parameters.key?("user")
      recipes_json = Recipe.where("user_id": request.query_parameters["user"]).as_json
    elsif request.query_parameters.key?("recipe")
      recipes_json = Recipe.where("id": request.query_parameters["recipe"]).as_json
    else
      recipes_json = Recipe.all.as_json
    end
    recipes_json.each do |recipe|
      recipe["username"] = User.find(recipe["user_id"]).name
      recipe["like_count"] = Recipe.find(recipe["id"]).like_recipes.count
      recipe["ingredients"] = []
      ingredients = Recipe.find(recipe["id"]).ingredient_recipes
      ingredients.each do |ingredient|
        recipe["ingredients"].push({
          "qty": ingredient.qty,
          "unit": ingredient.unit,
          "name": ingredient.ingredient.name,
        })
      end
    end
    render json: recipes_json, status: :ok
  end

  def create
    recipe_data = params.require(:state)
    p "!!!!!!"
    p recipe_data
    recipe = Recipe.create(
      user_id: recipe_data["user_id"],
      name: recipe_data["recipe"],
      serve: recipe_data["serve"],
      instruction: recipe_data["instructions"],
      url: recipe_data["url"],
    )
    recipe_data["ingredients"].each do |ingredient|
      i_name = Ingredient.create(name: ingredient["name"])
      recipe.ingredient_recipes.create(qty: ingredient["qty"], unit: ingredient["unit"], ingredient_id: i_name.id)
    end
    render json: { message: { "recipe_id": recipe.id } }, status: :ok
  end
end
