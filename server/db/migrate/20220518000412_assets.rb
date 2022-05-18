class Assets < ActiveRecord::Migration[6.1]
  def change
    create_table :assets do |t|
      t.integer :user_id
      t.string :name
      t.string :datePurchased
      t.integer :estimatedValue
    end
  end
end