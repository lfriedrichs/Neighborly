Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :update]
      resources :asks, only: [:create, :delete]
      resources :offers, only: [:create, :delete]
      resources :neighborhoods, only: [:show, :update]
      post '/login', to: 'auth#create'
      get '/home', to: 'users#home'
    end
  end
end