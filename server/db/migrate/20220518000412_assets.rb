class Assets < ActiveRecord::Migration[6.1]
  def change
    create_table :assets do |t|
      t.integer :user_id
      t.string :name
      t.string :date_purchased
      t.integer :estimated_value
    end
  end
end