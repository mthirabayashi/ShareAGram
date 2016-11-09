json.searchResults do
  json.array! @users.order('username ASC'), :username, :profile_pic, :id
end
