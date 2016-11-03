class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: {signUp: @user.errors.full_messages}, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    # remember how to use includes(:posts)
    # @user_posts = Post.where(author_id: params[:id])
    render :profile
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email, :full_name)
  end
end
