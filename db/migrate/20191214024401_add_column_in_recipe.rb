class AddColumnInRecipe < ActiveRecord::Migration[6.0]
  def change
    add_reference :recipes, :user, index: true
  end
end
