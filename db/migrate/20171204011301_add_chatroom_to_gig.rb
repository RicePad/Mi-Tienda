class AddChatroomToGig < ActiveRecord::Migration[5.1]
  def change
    add_reference :gigs, :chatroom, foreign_key: true
  end
end
