class User < ApplicationRecord
  validates :fname, :lname, :session_token, presence: true
  has_many :checkins
  has_many :strikes
  has_many :pairs
  has_many :assessment_scores

  after_initialize :ensure_session_token

  def current_pairing
    #finds the pairing for the current day
    self.pairs.find_by(day_id: Day.today(self.cohort_id))
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_bas64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

end
