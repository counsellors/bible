class AddUpdatetimeToSuggestion < ActiveRecord::Migration
  def change
    add_column :suggestions, :update_time, :datetime
  end
end
