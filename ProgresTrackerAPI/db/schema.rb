# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170604191042) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "assessment_scores", force: :cascade do |t|
    t.string   "assessment_name", null: false
    t.integer  "score",           null: false
    t.integer  "user_id",         null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "checkins", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "day_id",     null: false
    t.datetime "morning"
    t.datetime "lunch"
    t.datetime "afternoon"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "days", force: :cascade do |t|
    t.string   "name",       null: false
    t.date     "date",       null: false
    t.integer  "cohort_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pairs", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.integer  "partner_id"
    t.integer  "day_id",      null: false
    t.integer  "score"
    t.string   "workstation", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "strikes", force: :cascade do |t|
    t.string   "note",       null: false
    t.integer  "user_id",    null: false
    t.integer  "day_id",     null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "fname",        null: false
    t.string   "lname",        null: false
    t.string   "picture_url"
    t.string   "email"
    t.string   "linkedin_url"
    t.string   "github_url"
    t.string   "pronouns"
    t.integer  "cohort_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

end
