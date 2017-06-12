json.extract! assessment_score, :assessment_name, :score
json.passing_score assessment_score.assessment_stats(current_user).passing_score
json.max_score assessment_score.assessment_stats(current_user).max_score
