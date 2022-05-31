class User < ActiveRecord::Base
  has_many :expenses
  has_many :items
  has_many :assets

  def self.full_names
      self.each do |e|
        puts "Your name is #{e}"
      end
  end

end