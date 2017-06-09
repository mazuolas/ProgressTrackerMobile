json.array!(@users) do |user|
  json.extract! user, :fname, :lname, :email, :picture_url, :linkedin_url, :github_url, :pronouns
end
