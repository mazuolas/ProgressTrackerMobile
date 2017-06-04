class AssessmentScore < ApplicationRecord
  validates :assessment_name, :score, :user_id, presence: true

  belongs_to :user
end
