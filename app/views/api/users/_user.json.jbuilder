json.extract! user, :id, :username
# json.likedPosts user.liked_posts
json.likedPosts user.liked_posts.map(&:id)
