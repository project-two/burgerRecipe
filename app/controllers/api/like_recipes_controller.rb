class Api::LikeRecipesController < ApplicationController
  def index
    if request.query_parameters.key?("count")
      render json: LikeRecipe.count, status: :ok
    else
      render json: LikeRecipe.all, status: :ok
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
