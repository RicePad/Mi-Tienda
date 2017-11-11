Rails.application.routes.draw do
  resources :gigs
  root to: 'gigs#index';


  #REST API Route:

  namespace :api do 
  	namespace :v1 do
  		resources :gigs
  	end
  end  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
