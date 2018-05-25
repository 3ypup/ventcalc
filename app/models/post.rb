class Post < ApplicationRecord

  has_many :comments


  validates :author, presence: true
  validates :content, presence: true
end
