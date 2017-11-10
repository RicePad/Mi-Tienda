class CreateGigs < ActiveRecord::Migration[5.1]
  def change
    create_table :gigs do |t|
      t.string :title
      t.string :category
      t.text :description
      t.integer :price
      t.text :main_image
      t.text :thumb_image
      t.integer :status

      t.timestamps
    end
  end
end
