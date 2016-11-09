class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(followed_id: params[:followed_id])
    @follow.follower_id = current_user.id
    # debugger
    if @follow.save
      @user = User.find(params[:followed_id])
      render :show
    else

    end
  end

  def destroy
    # debugger
    @follow = Follow.find_by(followed_id: params[:followed_id], follower_id: current_user.id)
    if @follow.destroy
      @user = User.find(params[:followed_id])
      render :show
    else

    end
  end

end
