class Api::SessionController < ApplicationController

  def create
    @user = User.find_by(username: params[:username])
    if @user
      render json: { session_token: @user.reset_session_token! }, status: 200
    else
      render json: ["Invalid login credentials"], status: 422
    end
  end

  def destroy
    @current_user.reset_session_token!
  end

end
