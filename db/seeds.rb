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
User.create!(username: "mike", email: "mike@email.com", password: "password", profile_pic: "http://res.cloudinary.com/duep1w4tv/raw/upload/v1478320148/Hirabayashi_lrvbra.jpg")

while (idx < 5)
  idx += 1
  User.create!(username: "mike#{idx}", email: "mike#{idx}@email.com", password: "password")
end

unsplash_images = [
  "http://res.cloudinary.com/duep1w4tv/raw/upload/v1478235292/night_sky_kgna8b.jpeg",
  "http://res.cloudinary.com/duep1w4tv/raw/upload/v1478235288/mountains_ghxzhq.jpeg",
  "http://res.cloudinary.com/duep1w4tv/raw/upload/v1478235288/snow_zmmor5.jpeg",
  "http://res.cloudinary.com/duep1w4tv/raw/upload/v1478235287/garden_burger_r3njyi.jpeg",
  "http://res.cloudinary.com/duep1w4tv/raw/upload/v1478235284/voltage_lines_tscpty.jpeg",
  "http://res.cloudinary.com/duep1w4tv/raw/upload/v1478235280/croissant_k80ukz.jpeg"
]

google_images = [
  "http://www.childrenstherapystore.com/images/Pop%2520Eyes%2520Rubber%2520Duckie%25201.png",
  "https://s-media-cache-ak0.pinimg.com/originals/86/d4/5d/86d45d6465271bfc7e11dad896289b89.jpg",
  "https://s-media-cache-ak0.pinimg.com/736x/a1/d6/cc/a1d6cc70520e74b5b3692bd465b3cd00.jpg",

]

idx = 1
while (idx <= 5)
  url = unsplash_images[(idx % unsplash_images.length)]
  Post.create!(img_url: url, description: "description for post#{idx}", author_id: 1)
  idx += 1
end

3.times do
  url = google_images[idx % google_images.length]
  Post.create!(img_url: url, description: "description for post#{idx}", author_id: 2)
  idx += 1
end
