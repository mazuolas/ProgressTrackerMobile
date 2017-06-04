class Day < ApplicationRecord
  validates :name, :date, :cohort_id, presence: true
end
