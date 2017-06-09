class AssessmentStat < ApplicationRecord
  validates :name, :cohort_id, presence: false
  
end
