Rails.application.routes.draw do
  resources :categories
  resources :users, only: [:show, :edit]
  devise_for :users, path: '', path_names: { sign_in: 'login', sign_out: 'logout', sign_up: 'registration'}
  root to: 'gigs#index'
  resources :gigs
  get 'home', to: 'homes#index'
  get 'gig/:id', to: 'gigs#show', as: 'gig_show'
  get '/your_gigs_profile' => 'gigs#your_gigs_profile'
  get '/your_purchases' => 'purchases#your_purchases'
  post 'checkout', to: 'purchases#checkout'


  #REST API Route:
  namespace :api do 
  	namespace :v1 do
  		resources :gigs
  	end
  end  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
