class MessagesController < ApplicationController
	before_action :authenticate_user!
	before_action :set_chatroom


	def create

	end

	private

	def set_chatroom

	end

	def message_params

	end
end