class Api::DaysController < ApplicationController
  def show
    #shows day for current user
    @day = Day.today(current_user.cohort_id)
  end
end
