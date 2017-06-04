class Api::CheckinsController < ApplicationController
  def show
    #shows the checkins for current user for current day
    @checkin = Checkin.find_by(
    user_id: current_user.id,
    day_id: Day.today(current_user.cohort_id).id)
  end

  def update
    #updates the checkin for current user for current day
    @checkin = Checkin.find_by(
      user_id: current_user.id,
      day_id: Day.today(current_user.cohort_id).id)
    @checkin.update(checkin_params)
    render :show
  end

  private

  def checkin_params
    params.require(:checkin).premit(:morning, :lunch, :afternoon)
  end
end
