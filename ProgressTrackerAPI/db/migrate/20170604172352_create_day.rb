class CreateDay < ActiveRecord::Migration[5.0]
  def change
    create_table :days do |t|
      t.string :name, null: false
      t.date :date, null: false
      t.integer :cohort_id, null: false

      t.timestamps
    end
  end
end
