class GigsController < ApplicationController
	before_action :set_gig, only: [:show]
	layout 'gig'	

	def index
		@gig_items = Gig.all
	end
	
	def show

	end

	def new

	end

	def show

	end

	private

		def set_gig
			@gig_item = Gig.find(params[:id])
		end

		def gig_params
			params.require(:gig).permit(:title, :category, :description, :price, :main_image, :thumb_image, :status)
		end

end
