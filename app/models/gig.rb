class Gig < ApplicationRecord
	def set_defaults
		self.main_image ||= "http://via.placeholder.com/600x400"
		self.thumb_image ||= "http://via.placeholder.com/350x200"
	end
end
