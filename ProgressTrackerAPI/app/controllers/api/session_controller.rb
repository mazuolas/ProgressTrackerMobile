class Api::SessionController < ApplicationController

  def create
    @user = User.find_by(username: params[:username])
    if @user
      session[:session_token] = @user.reset_session_token!
      render{
        status: 200
      }
    else
      render{
        json: "No user",
        status: 404
      }
    end
  end

  def destroy
    @current_user.reset_session_token!
    session[:session_token] = nil
  end

end
