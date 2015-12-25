class RemoveUpdateTimeFromSuggestion < ActiveRecord::Migration
  def change
    remove_column :suggestions, :update_time, :datatime
  end
end
