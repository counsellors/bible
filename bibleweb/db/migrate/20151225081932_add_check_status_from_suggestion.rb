class AddCheckStatusFromSuggestion < ActiveRecord::Migration
  def change
    add_column :suggestions, :check_status, :string
  end
end
