Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    resource :session, only:[:create, :destroy]
    resources :posts, only: [:index, :create, :show, :update, :destroy]
    resources :likes, only: [:create, :destroy]
    resources :comments, only: [:create, :destroy]
    resources :follows, only: [:create, :destroy]
    resources :searches, only: [:index, :create]
  end
  root "static_pages#root"
end
