class RemovePriceFromPurchase < ActiveRecord::Migration[5.1]
  def change
    remove_column :purchases, :price, :integer
  end
end
