# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all;
Post.destroy_all;
Like.destroy_all;
ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('posts')
ActiveRecord::Base.connection.reset_pk_sequence!('likes')

idx = 1
User.create!(username: "guest", email: "guest@email.com", password: "password", profile_pic: "http://res.cloudinary.com/duep1w4tv/image/upload/v1478651158/ShareAGram/pzcgnvdxurnsefvhkr2l.png")
idx += 1
User.create!(username: "mike", email: "mike@email.com", password: "password", profile_pic: "http://res.cloudinary.com/duep1w4tv/image/upload/c_crop,h_400,w_400,x_18/v1478396419/Hirabayashi_nj9fgp.jpg")

while (idx < 50)
  idx += 1
  User.create!(username: "mike#{idx}", email: "mike#{idx}@email.com", password: "password", profile_pic: "http://res.cloudinary.com/duep1w4tv/image/upload/v1478651158/ShareAGram/pzcgnvdxurnsefvhkr2l.png")
end

guest_images = [
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478411824/ShareAGram/a0mqt4udx25pel8yg8e5.jpg",
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478408903/ShareAGram/lzhkbce1q6ptlfvpeits.jpg",
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478549098/ShareAGram/d6mfxlpccvzzr9g4hpe3.jpg",
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478549427/ShareAGram/mdjweccjgoysau65bn5v.jpg",
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478549458/ShareAGram/yr5w2eg94e1wptxxamri.jpg",
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478549525/ShareAGram/ygm7nqftal2uw26dbyiz.jpg"
]

mike_images = [
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478336952/ShareAGram/ay3amk3wdyrjuimxkukk.jpg",
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478549338/ShareAGram/xybuoy1bwgtwyldaozpv.jpg",
  "http://res.cloudinary.com/duep1w4tv/image/upload/c_scale,w_1152/v1478367842/vertical_hanging_camera_exuvlq.jpg",
]

idx = 1
while (idx <= 6)
  url = guest_images[(idx % guest_images.length)]
  Post.create!(img_url: url, description: "description for post#{idx}", author_id: 1)
  idx += 1
end

3.times do
  url = mike_images[idx % mike_images.length]
  Post.create!(img_url: url, description: "description for post#{idx}", author_id: 2)
  idx += 1
end

200.times do
  num_users = User.last.id
  num_posts = Post.last.id

  post_id = rand(num_users)
  user_id = rand(num_posts)

  Like.create(user_id: user_id, post_id: post_id)
  idx += 1
end
