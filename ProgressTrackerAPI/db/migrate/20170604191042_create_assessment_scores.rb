class CreateAssessmentScores < ActiveRecord::Migration[5.0]
  def change
    create_table :assessment_scores do |t|
      t.string :assessment_name, null: false
      t.integer :score, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
  end
end
