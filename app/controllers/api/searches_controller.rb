class Api::SearchesController < ApplicationController

  def index
    search_string = params[:search]
    @users = User.where("username like ?", "%#{search_string}%")
    # debugger
    render :results
  end

  def create
    search_string = params[:search]
    # debugger
    @users = []
    unless search_string.empty?
      @users = User.where("username like ?", "%#{search_string}%")
    # unless search_string.empty?
    #   @users = User.where("username like ?", "%#{search_string}%").limit(5)
    end
    render :results
  end

end
