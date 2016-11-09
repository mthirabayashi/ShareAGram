class Follow < ApplicationRecord
  validates :followed_id, uniqueness: {scope: :follower_id}

  belongs_to :person_getting_followed,
    class_name: "User",
    foreign_key: :followed_id,
    primary_key: :id

  belongs_to :person_following,
    class_name: "User",
    foreign_key: :follower_id,
    primary_key: :id
end
