class Pair < ApplicationRecord
  validates :user_id, :day_id, :workstation, presence: true
  belongs_to :user
  belongs_to :day
  belongs_to :partner,
    class_name: User
end
