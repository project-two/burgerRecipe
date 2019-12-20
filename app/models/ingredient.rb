class Ingredient < ApplicationRecord
  has_many :ingredient_recipes
  has_many :recipes
end
