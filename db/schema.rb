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

ActiveRecord::Schema.define(version: 20171202013022) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "chatroom_users", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "chatroom_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "purchase_id"
    t.index ["chatroom_id"], name: "index_chatroom_users_on_chatroom_id"
    t.index ["purchase_id"], name: "index_chatroom_users_on_purchase_id"
    t.index ["user_id"], name: "index_chatroom_users_on_user_id"
  end

  create_table "chatrooms", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "gig_categories", force: :cascade do |t|
    t.bigint "gig_id"
    t.bigint "category_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_gig_categories_on_category_id"
    t.index ["gig_id"], name: "index_gig_categories_on_gig_id"
  end

  create_table "gigs", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.integer "price"
    t.text "main_image"
    t.text "thumb_image"
    t.integer "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.index ["user_id"], name: "index_gigs_on_user_id"
  end

  create_table "messages", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "chatroom_id"
    t.text "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["chatroom_id"], name: "index_messages_on_chatroom_id"
    t.index ["user_id"], name: "index_messages_on_user_id"
  end

  create_table "purchases", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "gig_id"
    t.bigint "user_id"
    t.index ["gig_id"], name: "index_purchases_on_gig_id"
    t.index ["user_id"], name: "index_purchases_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.text "about"
    t.string "profile_image"
    t.string "braintree_id"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "chatroom_users", "chatrooms"
  add_foreign_key "chatroom_users", "purchases"
  add_foreign_key "chatroom_users", "users"
  add_foreign_key "gig_categories", "categories"
  add_foreign_key "gig_categories", "gigs"
  add_foreign_key "gigs", "users"
  add_foreign_key "messages", "chatrooms"
  add_foreign_key "messages", "users"
  add_foreign_key "purchases", "gigs"
  add_foreign_key "purchases", "users"
end
