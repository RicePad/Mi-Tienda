class GigCategory < ApplicationRecord
  belongs_to :user
  belongs_to :gig
  belongs_to :category
end
