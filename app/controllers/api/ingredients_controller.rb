class Api::IngredientsController < ApplicationController
  def index
    render json: Ingredient.all, status: :ok
  end

  def show
    begin
      ingredient = Ingredient.find(params[:id])
      if request.query_parameters.key?("name")
        render json: ingredient.name, status: :ok
      else
        render json: ingredient, status: :ok
      end
    rescue ActiveRecord::RecordNotFound
      render json: { errors: "#{params[:id]} doesn't exist" }, status: :not_found
    end
  end

  def create
    puts params[:name]
    render json: { errors: "doesn't exist" }, status: :ok
  end
end
