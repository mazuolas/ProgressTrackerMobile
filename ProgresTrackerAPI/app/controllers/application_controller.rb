class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user

  def current_user
    #placeholder until oAuth is implemented
    User.find_by(id: 1)
  end
end
