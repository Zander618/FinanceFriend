class User < ActiveRecord::Base
  has_many :expenses
  has_many :items
  has_many :assets

  def full_name
    self.users.map do |user|
    "#{user.first_name} #{user.last_name}"
    end
  end


end