# json.extract! post, :id, :description, :img_url, :author_id

json.extract! post, :id, :description, :img_url
json.author do
  json.author_id post.author.id
  json.author_username post.author.username
  json.author_pic post.author.profile_pic
end
json.likes post.likes.count
# json.likes post.likes  -> to get array of like objects
json.comments do
  post.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :body
      json.extract! comment.author, :username
      json.author_id comment.author.id
      # add author id
    end
  end
end
# json.comments post.comments
