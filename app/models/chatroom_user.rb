class ChatroomUser < ApplicationRecord
  belongs_to :user
  belongs_to :gig
  belongs_to :chatroom

end
