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
    end
    render json: recipes_json, status: :ok
  end

  def create
    render json: { message: "ok" }, status: :ok
  end
end
