class Api::V1::GigsController < ApplicationController
	 before_action :authenticate_user!, except: [:index, :show]

	 skip_before_action :verify_authenticity_token

		def index
			@gig_items = Gig.all
			render json: @gig_items
		end

		
		def create
			@gig_item = current_user.gigs.create(gig_params)
			render json: @gig_item
		end
			
		

		def show
			@gig_item = Gig.find(params[:id])
			render json: @gig_item
		end

		def destroy
		   @gig_item = Gig.find(params[:id])
		   @gig_item.destroy
		   render json: @gig_item

		end

		def update
		   @gig_item = Gig.find(params[:id])
		   @gig_item.updated_attributes(task_params)	
		   render json: @gig_item
		end

	private

		def gig_params
			 params.require(:gig).permit(:title, :category, :description, :price, :main_image, :thumb_image, :status, category_ids: [])
		end

end