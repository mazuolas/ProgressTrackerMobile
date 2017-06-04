class Api::AssessmentScoresController < ApplicationController
  def index
    @assessment_scores = current_user.assessment_scores
  end
end
