Rails.application.routes.draw do

  # any other route goes above here
  post "api/users" => "users#create_user" #sign up
  get "api/users/:user_id" => "users#get_by_id" #what?
  post "api/users/:user_id" => "users#update_user"
  delete "api/users/:user_id" => "users#delete_user"
  post "api/auth/get_token" => "users#get_token" #log in

  delete "api/like_recipes" => "api/like_recipes#destroy"
  namespace :api do
    resources :recipes, only: [:index]
    resources :like_recipes, only: [:index, :create]
  end
  # entry point of react page
  root "homepage#index"
  get "*path", to: "homepage#index"
  # make a change
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
