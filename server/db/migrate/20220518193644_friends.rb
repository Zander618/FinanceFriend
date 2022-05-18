class Friends < ActiveRecord::Migration[6.1]
  def change
    create_table :friends do |t|
      t.string :firstName
      t.string :lastName
      t.string :password
    end
  end
end
