class Api::SessionController < ApplicationController

  def create
    @user = User.find_by(username: params[:username])
    if @user
      session[:session_token] = @user.reset_session_token!
      render 'api/users/show'
    else
      render json: ["Invalid login credentials"], status: 422
    end
  end

  def destroy
    @current_user.reset_session_token!
    session[:session_token] = nil
  end

end
