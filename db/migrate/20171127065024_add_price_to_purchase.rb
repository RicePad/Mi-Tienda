class AddPriceToPurchase < ActiveRecord::Migration[5.1]
  def change
    add_column :purchases, :price, :integer
  end
end
