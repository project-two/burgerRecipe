class Api::LikeRecipesController < ApplicationController
  def index
    if request.query_parameters.key?("count")
      if request.query_parameters.key?("recipe")
        render json: LikeRecipe.where("recipe_id": request.query_parameters["recipe"]).count, status: :ok
      else
        render json: LikeRecipe.count, status: :ok
      end
    else
      recipes = LikeRecipe.all
      if request.query_parameters.key?("recipe")
        recipes = recipes.where("recipe_id": request.query_parameters["recipe"])
      end
      if request.query_parameters.key?("user")
        recipes = recipes.where("user_id": request.query_parameters["user"])
      end
      recipes_json = recipes.as_json
      recipes_json.each do |recipe|
        recipe["username"] = User.find(recipe["user_id"]).name
        recipe_obj = Recipe.find(recipe["recipe_id"])
        recipe["name"] = recipe_obj.name
        recipe["url"] = recipe_obj.url
        recipe["like_count"] = recipe_obj.like_recipes.count
      end
      render json: recipes_json, status: :ok
    end
  end

  def create
    if !User.exists?(params[:user])
      render json: { "error": "#{params[:user]} is not valid user" }, status: :not_found
    elsif !Recipe.exists?(params[:recipe])
      render json: { "error": "#{params[:recipe]} is not valid recipe" }, status: :not_found
    else
      if LikeRecipe.where("user_id": params[:user], "recipe_id": params[:recipe]).exists?
        render json: { "error": { "user": params[:user], "recipe": params[:recipe], "message": "already exists!" } }, status: :bad_request
      else
        if LikeRecipe.create(user_id: params[:user], recipe_id: params[:recipe])
          render json: { "created": { "user": params[:user], "recipe": params[:recipe] } }, status: :ok
        else
          render json: { "error": { "user": params[:user], "recipe": params[:recipe] } }, status: :internal_server_error
        end
      end
    end
  end

  def destroy
    LikeRecipe.where("user_id": params[:user], "recipe_id": params[:recipe]).destroy_all
    render json: { "message": "" }, status: :ok
  end
end
