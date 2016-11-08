class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    # debugger
    @comment.save
    @post = Post.find_by(id: params[:comment][:post_id])
    # debugger
    render "api/posts/show", status:200
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    @post = Post.find_by(id: @comment.post_id)
    @comment.destroy
    # debugger
    render "api/posts/show", status:200
  end

  def comment_params
    params.require(:comment).permit(:post_id, :body)
  end
end
