Rails.application.routes.draw do
  root 'greeting#index'

  namespace :api do
    resources :greeting, only: [:index]
  end
end
