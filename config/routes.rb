Rails.application.routes.draw do
  resources :companies, only: [:index, :show]
  get '/search' => 'companies#search', as: :companies_search
end
