class Day < ApplicationRecord
  validates :name, :date, :cohort_id, presence: true
  has_many :checkins

  def self.today(cohort_id)
    Day.find_by(cohort_id: cohort_id, date: Date.today)
  end
end
