class Expenses < ActiveRecord::Migration[6.1]
  def change
    create_table :expenses do |t|
      t.integer :user_id
      t.string :name
      t.integer :monthlyCost
    end
  end
end
