class CreateUserTable < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :fname, null: false
      t.string :lname, null: false
      t.string :picture_url
      t.string :email
      t.string :linkedin_url
      t.string :github_url
      t.string :pronouns
      t.integer :cohort_id
      
      t.timestamps
    end
  end
end
