class AddBraintreeIdToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :braintree_id, :string
  end
end
