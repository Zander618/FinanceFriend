class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
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

end
