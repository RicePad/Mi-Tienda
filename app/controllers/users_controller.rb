class UsersController < ApplicationController

	def show 
		@user = User.find(params[:id])
		@gig_items = @user.gigs
	end

end