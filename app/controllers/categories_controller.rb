class CategoriesController < ApplicationController
	before_action :set_category, only: [:show]

	def index
		@categories = Category.all
	end

	def show
		
		@gig_categories = @category.gigs.paginate(page: params[:page], per_page: 5)

	end


	private

	  def set_category
	  	@category = Category.find(params[:id])
	  end
end
