class Api::PostsController < ApplicationController
  def index
    post_feed = current_user.followings.ids
    post_feed << current_user.id
    @posts = Post.includes(:comments, :author, :likes).where(author_id: post_feed)
    # @posts = Post.includes(:comments, :author, comments: [:author], :likes).where(author_id: post_feed)
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render :show
      # render json: {createPost: ['Successfully uploaded post']}
    else
      render json: {createPost: @post.errors.full_messages}, status: 422
    end
  end

  def show
  end

  def update
    # debugger
    @post = Post.find(params[:id])
    # debugger
    if @post.update(post_params)
      render json: @post.author_id
    # else
    #   render json: {createPost: @post.errors.full_messages}, status 422
    end
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
