class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    # debugger
    if (@comment.save)
      @posts = Post.all
      render "api/posts/index", status:200
    else

    end
  end

  def destroy
  end

  def comment_params
    params.require(:comment).permit(:post_id, :body)
  end
end
