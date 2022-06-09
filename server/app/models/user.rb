class User < ActiveRecord::Base
  has_many :expenses
  has_many :items
  has_many :assets

  def self.full_names
      users = self.all
      users.map do |user|
        "#{user.first_name} #{user.last_name}"
      end
  end

  def asset_total
    self.assets.sum(:estimated_value)
  end

  def expenses_total
    self.expenses.sum(:monthly_cost)
  end

  def items_total
    self.items.sum(:cost)
  end

  def most_expensive_asset
    self.assets.maximum(:estimated_value)
  end

  def most_expensive_expense
    self.expenses.maximum(:monthly_cost)
  end

  def most_expensive_item
    self.items.minimum(:cost)
  end

end