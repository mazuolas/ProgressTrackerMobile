Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show]
    resources :days, only: [:show]
    resources :checkins, only: [:show, :update]
    resources :strikes, only: [:index]
    resources :pairs, only: [:index, :show]
  end
end
