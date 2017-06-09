class Checkin < ApplicationRecord
  validates :user_id, :day_id, presence: true

  belongs_to :user
  belongs_to :day
end
