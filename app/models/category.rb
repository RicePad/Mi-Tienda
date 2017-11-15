class Category < ApplicationRecord
	has_many :gig_categories
	has_many :gigs, through: :gig_categories

end
