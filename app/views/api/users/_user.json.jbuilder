json.extract! user, :id, :username
# json.likedPosts user.liked_posts
json.likedPosts user.liked_posts.map(&:id)
json.following user.followings.map(&:id)
# json.following user.followings
json.followers user.followers.length
