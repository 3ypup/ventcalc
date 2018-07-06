class Char < ApplicationRecord

  belongs_to :post


  validates :user, presence: true
  validates :charname, presence: true
  validates  :power, presence: true
  validates  :dex, presence: true
  validates  :wiz, presence: true
  validates  :hp, presence: true

  validates  :uniname, presence: true
  validates   :charimg, presence: true
  validates_format_of :charimg,  :with => %r{(png|jpg|jpeg)}i, :message => "Неправильный формат файла !!"
  mount_uploader :charimg, CharimgUploader

end
