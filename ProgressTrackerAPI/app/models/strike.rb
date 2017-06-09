class Strike < ApplicationRecord
  validates :note, :user_id, :day_id, presence: true
  belongs_to :user
  belongs_to :day
end
