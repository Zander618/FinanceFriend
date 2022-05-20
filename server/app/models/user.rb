class User < ActiveRecord::Base
  has_many :expenses
  has_many :items
  has_many :assets
  belongs_to :friends
end