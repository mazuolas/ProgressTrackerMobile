class User < ApplicationRecord
  validates :fname, :lname, presence: true
  has_many :checkins
  has_many :strikes
  has_many :pairs

  def current_pairing
    #finds the pairing for the current day
    self.pairs.find_by(day_id: Day.today(self.cohort_id))
  end
end
