Rails.application.routes.draw do
  resources :gigs
  get 'homes/index'


  root to: 'gigs#index';
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
