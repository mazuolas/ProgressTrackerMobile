class Api::AssessmentScoresController < ApplicationController
  def index
    @assessment_scores = current_user.assessment_scores
  end

  def show
    #find the score for assessment named in params
    @assessment_score = current_user.assessment_scores.find_by(assessment_name: params[:name])
    #find the stats for the current user's cohort
    @assessment_stats = @assessment_score.assessment_stats(current_user)
  end
end
