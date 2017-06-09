class CreateCheckins < ActiveRecord::Migration[5.0]
  def change
    create_table :checkins do |t|
      t.integer :user_id, null: false
      t.integer :day_id, null: false
      t.datetime :morning
      t.datetime :lunch
      t.datetime :afternoon
      
      t.timestamps
    end
  end
end
