class User < ActiveRecord::Base
  has_many :assets
  has_many :items
  has_many :expenses
end