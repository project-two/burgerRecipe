class Recipe < ApplicationRecord
  has_many :ingredient_recipes
  has_many :ingredients, through: :ingredient_recipe
  has_many :like_recipes
  belongs_to :user
end
