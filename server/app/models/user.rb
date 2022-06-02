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
    self.assets.map do |asset|
      asset.sum(:estimated_value)
    end
  end

end