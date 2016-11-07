class Api::LikesController < ApplicationController

    def create
      # debugger
      # Parameters {"post_id"=>"8", "format"=>:json, "controller"=>"api/likes", "action"=>"create"}
      @like = Like.new(
        user_id: current_user.id,
        post_id: params[:post_id]
      )
      # debugger
      if(@like.save)
        @user = current_user
        @posts = Post.all
        render :show, status: 200
      # else
      #   @errors = @like.errors.full_messages
  		# 	render "api/", status: 422
      end
    end

    # def show
    #   @user = current_user
    #   @posts = Post.all
    #   render :show
    # end

    def destroy
      @like = Like.find_by(
        user_id: current_user.id,
        post_id: params[:post_id]
      )
      # debugger
      if(@like.destroy)
        @user = current_user
        @posts = Post.all
        render :show, status: 200
      # else
      #   @errors = @like.errors.full_messages
  		# 	render "api/", status: 422
      end
    end

end
