class GigsController < ApplicationController
    before_action :authenticate_user!, except: [:index]
	before_action :set_gig, only: [:show]

	layout 'gig'	

	def index
		@gig_items = Gig.all
	end
	
	def show

	end

	def new
	   @gig_item = Gig.new


	end

	def create
		@gig_item = Gig.new(gig_params)
		if @gig_item.save 
			redirect_to root_path, notice: "Your gig has been created"
		else
			render :new
		end
	end


	private

		def set_gig
			@gig_item = Gig.find(params[:id])
		end

		def gig_params
			 params.require(:gig).permit(:title, :category, :description, :price, :main_image, :thumb_image, :status)
		end

end
