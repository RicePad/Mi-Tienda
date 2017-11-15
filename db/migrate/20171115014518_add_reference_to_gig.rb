class AddReferenceToGig < ActiveRecord::Migration[5.1]
  def change
    add_reference :gigs, :user, foreign_key: true
  end
end
