class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
#  get all data

  get '/users' do
    user = User.all
    user.to_json(
      include: {
           items: {only: [:id, :name, :cost, :category, :date]},
           expenses: {only: [:id, :name, :monthly_cost]},
           assets: {only: [:id, :name, :date_purchased, :estimated_value]}
      }
    )
  end

  # Assets

  post '/users/assets/new' do
    asset = Asset.create(
      user_id: params[:user_id],
      name: params[:name],
      date_purchased: params[:date_purchased],
      estimated_value: params[:estimated_value]
    )
    asset.to_json
    end
  
  delete '/users/assets/:id' do
    asset = Asset.find(params[:id])
    asset.destroy
    asset.to_json
  end


  #Expenses

  post '/users/expenses/new' do
    expense = Expense.create(
      user_id: params[:user_id],
      name: params[:name],
      monthly_cost: params[:monthlyCost]
    )
    expense.to_json
  end

  delete '/users/expenses/:id' do
    expense = Expense.find(params[:id])
    expense.destroy
    expense.to_json
  end

  patch '/users/expenses/:id' do
    expense = Expense.find(params[:id])
    expense.update(
      user_id: params[:user_id],
      name: params[:name],
      monthly_cost: params[:monthly_cost]
      )
      expense.to_json
  end



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
