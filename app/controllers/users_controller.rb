class UsersController < ApplicationController

def show 
	@user = User.find(params[:id])
	@gigs = @user.gigs
end

end