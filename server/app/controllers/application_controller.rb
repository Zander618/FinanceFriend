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

  # create user

  post '/users/new' do
    user = User.create(
      first_name: params[:first_name],
      last_name: params[:last_name]
    )
    user.to_json(
      include: {
           items: {only: [:id, :name, :cost, :category, :date]},
           expenses: {only: [:id, :name, :monthly_cost]},
           assets: {only: [:id, :name, :date_purchased, :estimated_value]}
      }
    )
  end

  # Assets

  post '/assets/new' do
      user = User.find_by(id: params[:user_id])
      asset = user.assets.create(
        name: params[:name],
        date_purchased: params[:date_purchased],
        estimated_value: params[:estimated_value]
      )
      asset.to_json
    end
  
  delete '/assets/:id' do
    user = User.find_by(id: params[:user_id])
    asset = user.assets.find_by(id: params[:id])
    asset.destroy
    asset.to_json
  end

  patch '/assets/:id' do
    asset = Asset.find(params[:id])
    asset.update(
      name: params[:name],
      date_purchased: params[:date_purchased],
      estimated_value: params[:estimated_value]
      )
      asset.to_json
  end


  #Expenses

  post '/expenses/new' do
    user = User.find_by(id: params[:user_id])
    expense = user.expenses.create(
      name: params[:name],
      monthly_cost: params[:monthly_cost]
    )
    expense.to_json
  end

  delete '/expenses/:id' do
    expense = Expense.find(params[:id])
    expense.destroy
    expense.to_json
  end

  patch '/expenses/:id' do
    expense = Expense.find(params[:id])
    expense.update(
      name: params[:name],
      monthly_cost: params[:monthly_cost]
      )
      expense.to_json
  end

# #Items/ Money Tracker

  post '/items/new' do
    user = User.find_by(id: params[:user_id])
    item = user.items.create(
      name: params[:name],
      cost: params[:cost],
      category: params[:category],
      date: params[:date]
    )
    item.to_json
  end

  patch '/items/:id' do
    item = Item.find(params[:id])
    item.update(
      name: params[:name],
      cost: params[:cost],
      category: params[:category],
      date: params[:date]
      )
      item.to_json
  end

  delete '/items/:id' do
    item = Item.find(params[:id])
    item.destroy
    item.to_json
  end

end
