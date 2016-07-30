class CompaniesController < ApplicationController
  before_action :set_company, only: :show

  def search
    @companies = Company.search(params[:query])
    if request.xhr?
      render json: @companies.to_json
    else
      render :index
    end
  end

  def index
    @companies = Company.all
  end

  def show
  end

  private

  def set_company
    @company = Company.find(params[:id])
  end
end
