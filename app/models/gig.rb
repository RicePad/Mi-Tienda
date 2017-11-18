class Gig < ApplicationRecord
	belongs_to :user
	has_many :gig_categories
	has_many :categories, through: :gig_categories
	# after_initialize :set_defaults
	validates_presence_of :thumb_image, :main_image


	mount_uploader :thumb_image, GigUploader
	mount_uploader :main_image, GigUploader
	
	# def set_defaults
	# 	self.main_image ||= "http://via.placeholder.com/600x400"
	# 	self.thumb_image ||= "http://via.placeholder.com/200x200"
	# end

	
end
