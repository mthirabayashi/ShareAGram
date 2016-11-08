json.currentUser do
  json.currentUser do
    json.partial! 'api/users/user', user: @user
  end
end
json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.partial! 'api/posts/show_post', post: post
    end
  end
end
