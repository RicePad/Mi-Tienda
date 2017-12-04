class GigsController < ApplicationController
    before_action :authenticate_user!, except: [:index, :show]
	before_action :set_gig, only: [:show, :edit, :update]

	layout 'gig'	

	def index
		@gig_items = Gig.all
	end
	
	def show
		@client_token = Braintree::ClientToken.generate	
		# @chatrooms = Chatroom.all
		@chatroom = Chatroom.find(params[:id])


		@messages = @chatroom.messages.order(created_at: :desc).limit(100).reverse


	end

	def new
	   @gig_item = Gig.new
	   @chatroom = Chatroom.new


	end

	def create
		@gig_item = current_user.gigs.build(gig_params)
		@chatroom = Chatroom.new
		if @gig_item.save 
			redirect_to root_path, notice: "Your gig has been created"
		else
			render :new
		end
	end

	def edit
	end

	def update
		if @gig_item.update(gig_params)
			redirect_to gig_show_path
			flash[:notice] = "Gig successfully updated"

		else
			render :edit
		end
	end

	def your_gigs_profile
		@user = current_user
		@gig_items = current_user.gigs
	end




	private

		def set_gig
			@gig_item = Gig.find(params[:id])

		end

		def gig_params
			 params.require(:gig).permit(:title, :category, :description, :price, :main_image, :thumb_image, :status, category_ids: [])
		end

		def chatroom_params
			params.require(:chatroom).permit(:name)
		end

end
