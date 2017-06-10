class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token, if: :json_request?
  helper_method :current_user

  def current_user
    #placeholder until oAuth is implemented
    User.find_by(id: 1)
  end

  protected

  def json_request?
    request.format.json?
  end
  
end
