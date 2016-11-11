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
Comment.destroy_all;
Follow.destroy_all;

ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('posts')
ActiveRecord::Base.connection.reset_pk_sequence!('likes')
ActiveRecord::Base.connection.reset_pk_sequence!('comments')
ActiveRecord::Base.connection.reset_pk_sequence!('follows')

idx = 1
User.create!(username: "guest", email: "guest@email.com", password: "password", profile_pic: "http://res.cloudinary.com/duep1w4tv/image/upload/v1478651158/ShareAGram/pzcgnvdxurnsefvhkr2l.png")
idx += 1
User.create!(username: "mike", email: "mike@email.com", password: "password", profile_pic: "http://res.cloudinary.com/duep1w4tv/image/upload/c_crop,h_400,w_400,x_18/v1478396419/Hirabayashi_nj9fgp.jpg")

usernames = [
  "joe512",
  'hikergirl',
  'bob_jones8',
  'hannah_smith',
  'robert1985',
  'saragram',
  'altwin',
  'deanMoore',
  'Chuck49',
  'LilyKoller',
  'Susan_M',
  'zackATTACK',
  'Lauren808',
  'michelleB',
  'fpsDoug'
]
usernames.each do |username|
  idx += 1
  User.create!(username: username, email: "#{username}@gmail.com", password: "password", profile_pic: "http://res.cloudinary.com/duep1w4tv/image/upload/v1478651158/ShareAGram/pzcgnvdxurnsefvhkr2l.png")
end

rand_images = [
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478411824/ShareAGram/a0mqt4udx25pel8yg8e5.jpg",
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478408903/ShareAGram/lzhkbce1q6ptlfvpeits.jpg",
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478549098/ShareAGram/d6mfxlpccvzzr9g4hpe3.jpg",
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478549427/ShareAGram/mdjweccjgoysau65bn5v.jpg",
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478549458/ShareAGram/yr5w2eg94e1wptxxamri.jpg",
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478549525/ShareAGram/ygm7nqftal2uw26dbyiz.jpg",
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478832230/ShareAGram/lfxumajxkjnxtricgybx.jpg",
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478832278/ShareAGram/ql9swyukwiw6lqdedec2.jpg",
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478832400/ShareAGram/dtmlgngm0qpeyzfuwvlw.jpg",
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478832450/ShareAGram/g1zmntufqqgduc1xmpps.jpg",
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478832495/ShareAGram/xyeshqepjkmywryxslyu.jpg",
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478832541/ShareAGram/xwitm7z7khlmgkkimvv1.jpg",

  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478884155/ShareAGram/vkxzmbbe0rvanhph9rcd.jpg",
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478884181/ShareAGram/u0o9nmqfgvdrub4kost3.jpg",
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478884206/ShareAGram/axtlcsxvpwtisgmhdvro.jpg",
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478884226/ShareAGram/atv8laickkj5qoky2yzm.jpg",
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478884259/ShareAGram/qbs49wc9mtvny3ihhz5d.jpg",
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478884281/ShareAGram/zca9kpuxmlweo41djv8l.jpg",
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478884304/ShareAGram/rdknsbkxre3xzk8hmx58.jpg",
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478884321/ShareAGram/eiddvt9ap7ctg3m71d1q.jpg",
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478884345/ShareAGram/oekkdyad7divemezjpgp.jpg",
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478884477/ShareAGram/ejjah7cq8uftcoanhwwu.jpg",

  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478903659/ShareAGram/b2oto8bww6xoqyhtqjod.jpg",
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478903734/ShareAGram/cfu7nigayqw2rwqgulqn.jpg",
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478903769/ShareAGram/dgtaak83jg5ls88jatmz.jpg",
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478903794/ShareAGram/zl1nlkkf6sjsglmfanfc.jpg",
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478903824/ShareAGram/cs4gwwuu3etwd185dfyl.jpg"

]

mike_images = [
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478336952/ShareAGram/ay3amk3wdyrjuimxkukk.jpg",
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478549338/ShareAGram/xybuoy1bwgtwyldaozpv.jpg",
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478887936/ShareAGram/e7erhnauob9a5lxvxkf0.jpg",
]

guest_images = [
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478832591/ShareAGram/zo55xlajox0z4x9u4fur.jpg",
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478832669/ShareAGram/vqzhtxdkby0kvnefctqt.jpg",
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478832706/ShareAGram/xk8djiogf2jtbcl05ev9.jpg",
  "http://res.cloudinary.com/duep1w4tv/image/upload/v1478832773/ShareAGram/dfetlnht0zx4lsi6xfyv.jpg"
]

descriptions = [
  "One of my favorite places",
  "Photo from the weekend",
  "This is one of my favorites",
  "Check this out",
  "What do you think?",
  "Check this place out",
  "Went here a few weeks ago. Great place.  Highly recommend, it to everyone!",
  "Simply beautiful",
  "Forgot to post this one earlier",
  "No filter",
  "Just went and I miss this place already",
  "Once in a lifetime experience",
  "Anyone want to go with me?",
  "One of the most beautiful photos I've taken",
  "Testing out the new camera",
  "This turned out to be a much clearer picture than I thought",
  "Vacation",
  "An old but great photo",
  "I want to go back already ",
  "Peaceful",
  "I want to live here",
  "Like a dream",
  "Dreaming of this place",
  "Can't even describe this one",
  "This is my dream",
  "This place was so peaceful",
  "This place was almost too good to be true",
  "Going here next week!",
  "Check this out",
  "One of my favorite photos",
  "This is where I want to live",
  "No Filter"
]

comments = [
  'Great picture!',
  'Wow!',
  'nice',
  'looks good!',
  'you should upload more',
  'Nice photo',
  'cool pic',
  'your photos are always amazing!',
  'Stunning!',
  "that's amazing",
  'beautiful shot!',
  'stunning photography',
  'Beautiful',
  'Pretty amazing camera work!',
  'keep the posts coming!',
  'more uploads!',
  'Great work!',
  'Amazing!',
  'Are you a professional photographer?',
  'I want to go there too!',
  "I think I'll have to go there too now",
  "Where was this?",
  "Did you take this photo?",
  "When did you go?",
  "When did you take this photo?",
  "I want to go with you next time!",
  "Take me next time!",
  "Unbelievable shot!",
  "Truly amazing photo",
  "Let me know the next time you go!",
  "This photo looks too good to be true!",
  "Is that real?",
  "Too good to be true",
  "Wow look at that!",
  "Cool, I can't believe you took that photo",
  "How long have you been taking photos?",
  "new camera? Looks really clear",
  "Wow, I wish I went there. That place is next on my places to visit",
  "When are you going again?",
  "Nice work!",
  "Looks photoshopped",
  "Coolest photo ever!",
  "Absolutely amazing photo",
  "Lucky!",
  "Was it that stunning in person?",
  "Looks professional",
  "Wow!",
  "Amazing!",
  "Stunning!",
  "Beautiful!",
  "I want to live there!",
  "looks like a dream"
]

idx = 1
rand_images.each do |url|
  max_user = User.last.id
  # user = rand(max_user) + 1
  user = ((rand(max_user)*3 + rand(7)) % max_user) + 1
  Post.create!(img_url: url, description: descriptions[idx % descriptions.length], author_id: user)
  idx += 1
end

guest_images.each do |url|
  user = 1
  Post.create!(img_url: url, description: descriptions[idx % descriptions.length], author_id: user)
  idx += 1
end

mike_images.each do |image|
  # url = mike_images[idx % mike_images.length]
  Post.create!(img_url: image, description: descriptions[idx % descriptions.length], author_id: 2)
  idx += 1
end

# create minimum likes for guest account posts
num_likes = 0
until num_likes >= 15
  num_users = User.last.id
  num_posts = Post.last.id

  user = User.find(1)
  user.posts.each do |post|
    user_id = ((rand(num_posts)*3 + rand(7)) % num_posts) + 1
    like = Like.new(user_id: user_id, post_id: post.id)
    if like.save
      num_likes += 1
    end
  end
end

num_likes = 0
until num_likes >= 110
  num_users = User.last.id
  num_posts = Post.last.id

  post_id = ((rand(num_posts)*3 + rand(7)) % num_posts) + 1
  user_id = ((rand(num_posts)*3 + rand(7)) % num_posts) + 1
  like = Like.new(user_id: user_id, post_id: post_id)
  if like.save
    num_likes += 1
  end
end

num_comments = 0
until num_comments >= 60
  num_users = User.last.id
  num_posts = Post.last.id

  post_id = ((rand(num_posts)*3 + rand(7)) % num_posts) + 1
  user_id = ((rand(num_posts)*3 + rand(7)) % num_posts) + 1
  post = Post.find(post_id)
  next if post.comments.length > 3
  next if post.comments.where(body: comments[(post_id - user_id) % comments.length]).length > 0
  comment = Comment.new(user_id: user_id, post_id: post_id, body: comments[(post_id - user_id) % comments.length])
  if comment.save
    num_comments += 1
  end
end

num_follows = 0
Follow.create!(followed_id: 2, follower_id: 1)
until num_follows >= 9
  user_count = User.last.id
  # make up to 30 random follows for guest account
  user1 = ((rand(user_count)*3 + rand(7)) % user_count) + 1
  user2 = 1
  next if (user1 <= 1)
  follow = Follow.new(followed_id: user1, follower_id: user2)
  if follow.save
    num_follows += 1
  end
end
num_follows = 0
until num_follows >= 15
  user_count = User.last.id
  # make up to 30 random follows for guest account
  user1 = ((rand(user_count)*3 + rand(7)) % user_count) + 1
  user2 = ((rand(user_count)*3 + rand(7)) % user_count) + 1
  next if (user1 == user2)
  follow = Follow.new(followed_id: user1, follower_id: user2)
  if follow.save
    num_follows += 1
  end
end
