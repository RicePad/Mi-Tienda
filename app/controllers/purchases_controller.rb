class PurchasesController < ApplicationController
	before_action :authenticate_user!
	before_action :set_gig, only: [:show]
	
	def show
		@purchase = current_user.purchases

	end

	def checkout

	    amount = params["amount"] 

		nonce = params["payment_method_nonce"]

		if current_user.braintree_id?
     	 	customer = Braintree::Customer.find(current_user.braintree_id)
    	else
      		result = Braintree::Customer.create(
		        email: current_user.email,
       		    payment_method_nonce: params[:payment_method_nonce]
		      )

		      customer = result.customer
      		  current_user.update(braintree_id: customer.id)
    end
	 	 result = Braintree::Transaction.sale(
	      amount: amount,
	      payment_method_nonce: nonce
	    )

	   	if result.success? 

			@purchase = current_user.purchases.create(gig_id: params[:gig_id])
			

	   		
   	   		redirect_to your_purchases_path, notice: "You have successfully checked out"
   	   	else
   	   		flash[:alert] = "Something went wrong while processing your transaction"
   	   		redirect_to root_path
   	   	end
	end

	def your_purchases
		@purchases = current_user.purchases
	end


	private 

		def set_gig
		   @gig_item = Gig.find(params[:id])

	    end

	    def purchase_params 
	    	params.require(:purchase).permit(:gig_id, :user_id)
		end

end
