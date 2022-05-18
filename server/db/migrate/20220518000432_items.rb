class Items < ActiveRecord::Migration[6.1]
  def change
        create_table :items do |t|
          t.integer :user_id
          t.string :name
          t.float :cost
          t.string :category
          t.string :date
    end
  end
end