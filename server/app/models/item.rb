class Item < ActiveRecord::Base
  belongs_to :users
  
  #Make one for individual users 

  def self.total_cost
    self.sum(:cost)
  end

end