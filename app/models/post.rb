class Post < ApplicationRecord

  has_many :comments

  
  validates :title, presence: true 
  validates :author, presence: true
  validates :content, presence: true

  mount_uploader :image, ImageUploader
end
