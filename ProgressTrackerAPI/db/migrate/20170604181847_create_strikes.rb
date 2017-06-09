class CreateStrikes < ActiveRecord::Migration[5.0]
  def change
    create_table :strikes do |t|
      t.string :note, null: false
      t.integer :user_id, null: false
      t.integer :day_id, null: false
      t.timestamps
    end
  end
end
