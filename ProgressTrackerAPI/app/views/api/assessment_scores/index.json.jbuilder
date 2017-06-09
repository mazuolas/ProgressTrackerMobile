@assessment_scores.each do |assessment_score|
  json.set! assessment_score.id do
    json.partial! 'api/assessment_scores/assessment_score',
      assessment_score: assessment_score
  end
end
