class Gig < ApplicationRecord
	belongs_to :user
	has_many :gig_categories
	has_many :categories, through: :gig_categories

	
	def set_defaults
		self.main_image ||= "http://via.placeholder.com/600x400"
		self.thumb_image ||= "http://via.placeholder.com/200x200"
	end

	
end
