class AddAboutToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :name, :string
    add_column :users, :about, :text
    add_column :users, :profile_image, :text
  end
end
