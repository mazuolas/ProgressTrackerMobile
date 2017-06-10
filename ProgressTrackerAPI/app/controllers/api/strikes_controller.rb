class Api::StrikesController < ApplicationController
  def index
    @strikes = current_user.strikes
  end
end
