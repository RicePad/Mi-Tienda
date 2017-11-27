class PurchasesController < ApplicationController
	before_action :authenticate_user!
	before_action :set_gig, only: [:show]

	def show
	end

	
	def checkout

		@purchase = current_user.purchase.create(purchase_params)

		
	    nonce = params["payment_method_nonce"]

	    result = Braintree::Transaction.sale(
	      amount: "4.00",
	      payment_method_nonce: nonce,
	      :options => {
	      :submit_for_settlement => true
	      }
	    )

   	    redirect_to root_path, notice: "You have successfully checked out"
	end


		
	def your_purchases

	end


	private 

		def set_gig
		   @gig_item = Gig.find(params[:id])
	    end

	    def purchase_params 
	    	params.require(:purchase).permit(:gig_id, :price)
		end

end
