# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all;
Post.destroy_all;
ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('posts')

idx = 1
User.create!(username: "guest", email: "guest@email.com", password: "password", profile_pic: "http://res.cloudinary.com/duep1w4tv/raw/upload/v1478320098/guest_prof_pic_xw4j4f.png")
idx += 1
User.create!(username: "mike", email: "mike@email.com", password: "password", profile_pic: "http://res.cloudinary.com/duep1w4tv/image/upload/c_crop,h_400,w_400,x_18/v1478396419/Hirabayashi_nj9fgp.jpg")

while (idx < 5)
  idx += 1
  User.create!(username: "mike#{idx}", email: "mike#{idx}@email.com", password: "password")
end

guest_images = [
  "http://res.cloudinary.com/duep1w4tv/raw/upload/v1478235292/night_sky_kgna8b.jpeg",
  "http://res.cloudinary.com/duep1w4tv/raw/upload/v1478235288/mountains_ghxzhq.jpeg",
  "http://res.cloudinary.com/duep1w4tv/raw/upload/v1478235288/snow_zmmor5.jpeg",
  "http://res.cloudinary.com/duep1w4tv/raw/upload/v1478235287/garden_burger_r3njyi.jpeg",
  "http://res.cloudinary.com/duep1w4tv/raw/upload/v1478235284/voltage_lines_tscpty.jpeg",
  "http://res.cloudinary.com/duep1w4tv/raw/upload/v1478235280/croissant_k80ukz.jpeg",
  "http://res.cloudinary.com/duep1w4tv/image/upload/c_limit,h_600,w_600/v1478234962/batch01/bird_kmtrqs.jpg"
]

mike_images = [
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478336952/ShareAGram/ay3amk3wdyrjuimxkukk.jpg",
  "http://res.cloudinary.com/duep1w4tv/image/upload/c_scale,w_1866/v1478367602/camera_leftside_kjb7za.jpg",
  "http://res.cloudinary.com/duep1w4tv/image/upload/c_scale,w_1152/v1478367842/vertical_hanging_camera_exuvlq.jpg",
]

idx = 1
while (idx <= 5)
  url = guest_images[(idx % guest_images.length)]
  Post.create!(img_url: url, description: "description for post#{idx}", author_id: 1)
  idx += 1
end

3.times do
  url = mike_images[idx % mike_images.length]
  Post.create!(img_url: url, description: "description for post#{idx}", author_id: 2)
  idx += 1
end
