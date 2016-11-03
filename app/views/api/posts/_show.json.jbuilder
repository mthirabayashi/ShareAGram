# json.extract! post, :id, :description, :img_url, :author_id

json.extract! post, :id, :description, :img_url
json.author do
  json.author_id post.author.id
  json.author_username post.author.username
  json.author_pic post.author.profile_pic
end
