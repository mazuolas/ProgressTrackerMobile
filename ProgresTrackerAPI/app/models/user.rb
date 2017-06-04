class User < ApplicationRecord
  validates :fname, :lname, presence: true
end
