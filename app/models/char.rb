class Char < ApplicationRecord

  belongs_to :post


  validates :user, presence: true
  validates :charname, presence: true
  validates  :power, presence: true
  validates  :uniname, presence: true



end
