class CreateAssessmentStats < ActiveRecord::Migration[5.0]
  def change
    create_table :assessment_stats do |t|
      t.string :name, null: false
      t.integer :cohort_id, null: false
      t.integer :max_score
      t.float :avg_score
      t.integer :median_score
      t.integer :passing_score
      t.timestamps
    end
  end
end
