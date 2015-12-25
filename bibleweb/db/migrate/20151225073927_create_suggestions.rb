class CreateSuggestions < ActiveRecord::Migration
  def change
    create_table :suggestions do |t|
      t.string :summary
      t.text :describe
      t.string :email

      t.timestamps null: false
    end
  end
end
