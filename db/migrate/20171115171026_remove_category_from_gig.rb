class RemoveCategoryFromGig < ActiveRecord::Migration[5.1]
  def change
    remove_column :gigs, :category, :string
  end
end
