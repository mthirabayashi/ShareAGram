class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: {user: @user.errors.full_messages}, status: 422
    end
  end

  private
  def user_params
    debugger
    params.require(:user).permit(:username, :password, :email, :full_name)
  end
end
