class Comment < ApplicationRecord
  validates :user_id, :post_id, :body, presence: true

  belongs_to :post
  belongs_to :author,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id

end
