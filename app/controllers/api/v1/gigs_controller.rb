class Api::V1::GigsController < ApplicationController
		skip_before_action :verify_authenticity_token

		def index
			@gig_items = Gig.all
			render json: @gig_items
		end

end