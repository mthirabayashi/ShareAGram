class Api::PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      @posts = Post.all
      render :index
    else
      render json: {createPost: @post.errors.full_messages}, status: 422
    end
  end

  def show
    # @post = Post.find_by(params[:userId])
  end

  def update
  end

  def destroy
    @post = Post.find(params[:id]);
    @post_author = @post.author_id
    if @post.destroy
      render json: @post_author
    else
      render json: {deletePost: @post.errors.full_messages}, status: 422
    end
  end

  private
  def post_params
    params.require(:post).permit(:img_url, :description, :author_id)
  end
end
