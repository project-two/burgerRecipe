class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :name, null: false
      t.integer :serve, null: false
      t.text :instruction, null: false

      t.timestamps
    end
  end
end
