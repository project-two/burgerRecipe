class AddColumntoRecipe < ActiveRecord::Migration[6.0]
  def change
    add_column :recipes, :url, :string
  end
end
