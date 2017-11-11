class GigsController < ApplicationController
	layout 'gig'	

	def index
		@gig_items = Gig.all
	end
	
	def show
	end

end
