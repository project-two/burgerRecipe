Rails.application.routes.draw do

  # any other route goes above here
  # entry point of react page
  root 'homepage#index'
  get '*path', to: 'homepage#index'
  # make a change
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
