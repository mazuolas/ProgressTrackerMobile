class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token, if: :json_request?
  helper_method :current_user

  def current_user
    return nil if sessionn[:session_token].nil?
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  protected

  def json_request?
    request.format.json?
  end

end
