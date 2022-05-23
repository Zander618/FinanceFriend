class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
#   Assets
#   get '/user/:id/assets'

  get '/friends' do
    friend = Friend.all
    friend.to_json(
      only:[:username, :id], 
      include: {
        users: {
         include: [
           items: {only: [:name, :cost, :category, :date]},
           expenses: {only: [:name, :monthly_cost]},
           assets: {only: [:name, :date_purchased, :estimated_value]}
        ]}}
    )
  end

    post '/assets' do
    asset = Asset.create(
      user_id: params[:user_id],
      name: params[:name],
      date_purchased: params[:date_purchased],
      estimated_value: params[:estimated_value]
    )
    asset.to_json
  end
  
  

  get 'friends/:user_id/assets' do 
    asset = Asset.all(params[:user_id])
    asset.to_json
  end

#   get '/users' do
#     user = User.all
#     user.to_json
#   end

#   get '/users/:user_id/assets' do
#     user = User.find(params[:user_id])
#     user.assets.to_json
#   end



#   patch '/users/:user_id/assets/:id' do
#     asset = Asset.find(params[:id])
#     asset.update(
#       name: params[:name],
#       date_purchased: params[:datePurchased],
#       estimated_value: params[:estimatedValue]
#       )
#       asset.to_json
#   end

#   delete '/users/:user_id/assets/:id' do
#     asset = Asset.find(params[:id])
#     asset.destroy
#     asset.to_json
#   end

#   #Expenses

#   get '/users/:user_id/expenses' do
#     user = User.find(params[:user_id])
#     user.expenses.to_json
#   end


#   post '/users/:user_id/expenses' do
#     expense = Expense.create(
#       name: params[:name],
#       monthly_cost: params[:monthlyCost]
#     )
#     expense.to_json
#   end

#   patch '/users/:user_id/expenses/:id' do
#     expense = Expense.find(params[:id])
#     expense.update(
#       name: params[:name],
#       monthly_cost: params[:monthlyCost]
#       )
#       expense.to_json
#   end

#   delete '/users/:user_id/expenses/:id' do
#     expense = Expense.find(params[:id])
#     expense.destroy
#     expense.to_json
#   end

# #Items/ Money Tracker

#   get '/users/:user_id/items' do
#     user = User.find(params[:user_id])
#     user.items.to_json
#   end

#   post '/users/:user_id/items' do
#     item = Item.create(
#       name: params[:name],
#       cost: params[:cost],
#       category: params[:category],
#       date: params[:date]
#     )
#     item.to_json
#   end

#   patch '/users/:user_id/items/:id' do
#     item = Item.find(params[:id])
#     item.update(
#       name: params[:name],
#       cost: params[:cost],
#       category: params[:category],
#       date: params[:date]
#       )
#       item.to_json
#   end

#   delete '/users/:user_id/items/:id' do
#     item = Item.find(params[:id])
#     item.destroy
#     item.to_json
#   end

# #Friends



#   post '/friends' do
#     friend = Friend.create(
#       lastName: params[:lastName],
#       password: params[:password]
#     )
#     friend.to_json
#   end

#   patch '/friends/:id' do
#     friend = Friend.find(params[:id])
#     friend.update(
#       username: params[:username],
#       password: params[:password]
#       )
#     friend.to_json
#   end

#   delete '/friends/:id' do
#     friend = Friend.find(params[:id])
#     friend.destroy
#     friend.to_json
#   end

  #all

# get "/users" do 
#   serialize(User.all)
# end

# get "/users/:id" do 
#   serialize(User.find(params[:id]))
# end

# # ...

# private

# def serialize(objects)
#   objects.to_json(
#     include: {
#       assets: {
#         only: [
#           :name, 
#           :date_purchased,
#           :estimated_value
#         ],
#       },
#       expenses: {
#             only: [
#               :name,
#               :monthly_cost
#             ]
#           }
#       }
#     }
#   )
# end

end
