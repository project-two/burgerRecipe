Rails.application.routes.draw do

  # any other route goes above here
  # entry point of react page
  get '*path', to: 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
