json.searchResults do
  if @users.length > 0
    json.array! @users.order('username ASC'), :username, :profile_pic, :id
  else
    json.array! @users, :username, :profile_pic, :id
  end
end
