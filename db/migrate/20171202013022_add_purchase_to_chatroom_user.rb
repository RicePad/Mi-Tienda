class AddPurchaseToChatroomUser < ActiveRecord::Migration[5.1]
  def change
    add_reference :chatroom_users, :purchase, foreign_key: true
  end
end
