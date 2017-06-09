class Api::PairsController < ApplicationController
  def show
    @pair = current_user.current_pairing
  end

  def index
    @pairs = current_user.pairs
  end
end
