json.set! @post.id do
  json.partial! 'api/posts/show_post', post: @post
end
