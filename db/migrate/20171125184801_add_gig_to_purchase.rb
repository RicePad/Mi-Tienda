class AddGigToPurchase < ActiveRecord::Migration[5.1]
  def change
    add_reference :purchases, :gig, foreign_key: true
  end
end
