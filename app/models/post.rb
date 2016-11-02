class Post < ApplicationRecord
  validates :img_url, :description, :author, presence: true

  belongs_to :author,
  class_name: "User",
  foreign_key: :author_id,
  primary_key: :id
end
