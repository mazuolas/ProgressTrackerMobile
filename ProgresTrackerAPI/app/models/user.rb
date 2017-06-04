class User < ApplicationRecord
  validates :fname, :lname, presence: true
  has_many :checkins
  has_many :strikes
end
