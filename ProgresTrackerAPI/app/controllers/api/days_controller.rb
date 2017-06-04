class Api::DaysController < ApplicationController
  def show
    @day = Day.find_by(cohort_id: params[:id], date: Date.today)
  end
end
