Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    get '/user/me', to: 'users#show'
    get '/classmates', to: 'users#index'
    get '/day/today', to: 'days#show'
    get '/checkins/today', to: 'checkins#show'
    patch '/checkins/today', to: 'checkins#update'
    get '/pair/today', to: 'pairs#show'
    get '/pairs', to: 'pairs#index'
    get '/strikes', to: 'strikes#index'
    get '/assessment_scores', to: 'assessment_scores#index'
    get '/assessment_score/:name', to: 'assessment_scores#show'
  end
end
