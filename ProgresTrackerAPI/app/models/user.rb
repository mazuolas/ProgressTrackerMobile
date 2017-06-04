class User < ApplicationRecord
  validates :fname, :lname, presence: true
  has_many :checkins
end
