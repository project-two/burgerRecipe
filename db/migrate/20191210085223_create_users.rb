class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name, nll: false, unique: true
      t.string :email, nll: false, unique: true
      t.string :password_digest
      t.boolean :admin, default: false

      t.timestamps
    end
  end
end
