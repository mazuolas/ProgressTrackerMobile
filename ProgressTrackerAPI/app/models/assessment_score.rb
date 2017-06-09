class AssessmentScore < ApplicationRecord
  validates :assessment_name, :score, :user_id, presence: true

  belongs_to :user

  def assessment_stats(user)
    AssessmentStat.find_by({
      cohort_id: user.cohort_id,
      name: assessment_name
      })
  end
end
