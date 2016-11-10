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
    @user = User.includes(:posts, posts: [:likes, :comments, :author], comments: [:author]).find(params[:id])
    # remember how to use includes(:posts)
    # @user_posts = Post.where(author_id: params[:id])
    if @user.nil?
      render json: {profilePage: ['No user with that id']}, status: 404
    else
      render "api/users/profile", status: 200
    end
  end

  def update
    @user = User.find(params[:user][:id])
    @user.update(user_params)
    render "api/users/profile", status: 200
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email, :full_name, :profile_pic)
  end
end
