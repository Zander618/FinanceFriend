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

  patch '/users/assets/:id' do
    asset = Asset.find(params[:id])
    asset.update(
      user_id: params[:user_id],
      name: params[:name],
      date_purchased: params[:date_purchased],
      estimated_value: params[:estimated_value]
      )
      asset.to_json
  end


  #Expenses

  post '/users/expenses/new' do
    expense = Expense.create(
      user_id: params[:user_id],
      name: params[:name],
      monthly_cost: params[:monthly_cost]
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


  post '/users/items/new' do
    item = Item.create(
      user_id: params[:user_id],
      name: params[:name],
      cost: params[:cost],
      category: params[:category],
      date: params[:date]
    )
    item.to_json
  end

  patch '/users/items/:id' do
    item = Item.find(params[:id])
    item.update(
      user_id: params[:user_id],
      name: params[:name],
      cost: params[:cost],
      category: params[:category],
      date: params[:date]
      )
      item.to_json
  end

  delete '/users/items/:id' do
    item = Item.find(params[:id])
    item.destroy
    item.to_json
  end


end
