class Api::UsersController < ApplicationController
  def show
    @user = current_user
  end

  def index
    @users = User.where(cohort_id: current_user.cohort_id).order(:fname)
  end
end
