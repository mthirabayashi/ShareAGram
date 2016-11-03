class Api::PostsController < ApplicationController
  def index
    @posts = Post.where(author_id: current_user.id)
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render :show
    else
      render json: {createPost: @post.errors.full_messages}, status: 422
    end
  end

  def show
    # @post = Post.find_by(params[:userId])
  end

  def update
  end

  def delete
  end

  private
  def post_params
    params.require(:post).permit(:img_url, :description, :author_id)
  end
end
