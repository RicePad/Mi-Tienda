class ChatroomsController < ApplicationController
	layout 'chatroom'	

  	before_action :authenticate_user!
    before_action :set_chatroom, only: [:show, :edit, :update, :destroy]

	def index
		@chatrooms = Chatroom.all
	end

	def show
		@messages = @chatroom.messages.order(created_at: :desc).limit(100).reverse

	end

	 def new
    	@chatroom = Chatroom.new
  	 end



	 def create
    	@chatroom = Chatroom.new(chatroom_params)
    		respond_to do |format|
		      if @chatroom.save
		        format.html { redirect_to @chatroom, notice: 'Chatroom was successfully created.' }
		        format.json { render :show, status: :created, location: @chatroom }
		      else
		        format.html { render :new }
		        format.json { render json: @chatroom.errors, status: :unprocessable_entity }
		      end
		    end
     end
	
	private

		def set_chatroom
			@chatroom = Chatroom.find(params[:id])
		end

		def chatroom_params
			params.require(:chatroom).permit(:name)
		end

end
