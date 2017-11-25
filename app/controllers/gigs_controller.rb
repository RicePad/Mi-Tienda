class GigsController < ApplicationController
    before_action :authenticate_user!, except: [:index, :show]
	before_action :set_gig, only: [:show, :edit, :update]

	layout 'gig'	

	def index
		@gig_items = Gig.all
	end
	
	def show
		@client_token = Braintree::ClientToken.generate		
	end

	def new
	   @gig_item = Gig.new


	end

	def create
		@gig_item = current_user.gigs.build(gig_params)
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

	def checkout

		nonce = params[:payment_method_nonce]
		    result = Braintree::Transaction.sale(
		    :amount => "15.00", #could be any other arbitrary amount captured in params[:amount] if they weren't all $10.
		    :payment_method_nonce => nonce,
		    :options => {
		      :submit_for_settlement => true
		      }
		    )

		    flash[:notice] = "Success! Time, like Nonces, is precious. Use it well." if result.success?
	end


	private

		def set_gig
			@gig_item = Gig.find(params[:id])
		end

		def gig_params
			 params.require(:gig).permit(:title, :category, :description, :price, :main_image, :thumb_image, :status, category_ids: [])
		end

end
