json.currentUser do
  json.currentUser do
    json.partial! 'api/users/user', user: current_user
  end
end
json.userProfile do
  json.posts do
    json.partial! 'api/posts/profile', posts: @user.posts
  end
  json.userProfile do
    json.id @user.id
    json.username @user.username
    json.full_name @user.full_name
    json.profile_pic @user.profile_pic
    json.following @user.followings.map(&:id)
    json.followers @user.followers.length
  end
end
