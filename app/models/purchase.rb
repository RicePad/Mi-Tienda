class Purchase < ApplicationRecord
belongs_to :user
belongs_to :gig
belongs_to :chatroom_user
end
