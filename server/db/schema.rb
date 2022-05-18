# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_05_18_193644) do

  create_table "assets", force: :cascade do |t|
    t.integer "user_id"
    t.string "name"
    t.string "datePurchased"
    t.integer "estimatedValue"
  end

  create_table "expenses", force: :cascade do |t|
    t.integer "user_id"
    t.string "name"
    t.integer "monthlyCost"
  end

  create_table "friends", force: :cascade do |t|
    t.string "firstName"
    t.string "lastName"
    t.string "password"
  end

  create_table "items", force: :cascade do |t|
    t.integer "user_id"
    t.string "name"
    t.float "cost"
    t.string "category"
    t.string "date"
  end

end
