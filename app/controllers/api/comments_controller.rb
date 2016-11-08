class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    # debugger
    @comment.save
    @posts = Post.all
    render "api/posts/index", status:200
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    # debugger
    @comment.destroy
    @posts = Post.all
    render "api/posts/index", status:200
  end

  def comment_params
    params.require(:comment).permit(:post_id, :body)
  end
end
