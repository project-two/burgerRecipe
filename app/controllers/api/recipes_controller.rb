class Api::RecipesController < ApplicationController
  def index
    recipes_json = Recipe.all.as_json
    recipes_json.each do |recipe|
      recipe["username"] = User.find(recipe["user_id"]).name
      recipe["like_count"] = Recipe.find(recipe["id"]).like_recipes.count
    end
    render json: recipes_json, status: :ok
  end
end
