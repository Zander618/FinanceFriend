class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  #Assets

  get '/assets' do
    assets = Asset.all
    assets.to_json
  end

  post '/assets' do
    assets = Asset.create(
      name: params[:name],
      datePurchased: params[:datePurchased],
      estimatedValue: params[:estimatedValue]
    )
    assets.to_json
  end

  patch '/assets/:id' do
    assets = Asset.find(params[:id])
    assets.update(
      name: params[:name],
      datePurchased: params[:datePurchased],
      estimatedValue: params[:estimatedValue]
      )
      assets.to_json
  end

  delete '/assets/:id' do
    assets = Asset.find(params[:id])
    assets.destroy
    assets.to_json
  end

  #Expenses

  get '/expenses' do
    expenses = Expense.all
    expenses.to_json
  end

  post '/expenses' do
    expenses = Expense.create(
      name: params[:name],
      monthlyCost: params[:monthlyCost]
    )
    expenses.to_json
  end

  patch '/expenses/:id' do
    expenses = Expense.find(params[:id])
    expenses.update(
      name: params[:name],
      monthlyCost: params[:monthlyCost]
      )
      expenses.to_json
  end

  delete '/expenses/:id' do
    expenses = Expense.find(params[:id])
    expenses.destroy
    expenses.to_json
  end

#Items/ Money Tracker

get '/items' do
  items = Expense.all
  items.to_json
end

post '/items' do
  items = Expense.create(
    name: params[:name],
    cost: params[:cost],
    category: params[:category],
    date: params[:date]
  )
  items.to_json
end

patch '/items/:id' do
  items = Item.find(params[:id])
  items.update(
    name: params[:name],
    monthlyCost: params[:monthlyCost]
    )
    items.to_json
end

delete '/items/:id' do
  items = Item.find(params[:id])
  items.destroy
  items.to_json
end

end
