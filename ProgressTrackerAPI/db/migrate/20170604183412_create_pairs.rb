class CreatePairs < ActiveRecord::Migration[5.0]
  def change
    create_table :pairs do |t|
      t.integer :user_id, null: false
      t.integer :partner_id
      t.integer :day_id, null: false
      t.integer :score
      t.string :workstation, null: false
      t.timestamps
    end
  end
end
