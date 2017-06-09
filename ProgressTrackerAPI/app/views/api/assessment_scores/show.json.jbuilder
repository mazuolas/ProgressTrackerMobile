json.partial! 'api/assessment_scores/assessment_score', assessment_score: @assessment_score
json.extract! @assessment_stats, :avg_score, :max_score, :median_score, :passing_score
