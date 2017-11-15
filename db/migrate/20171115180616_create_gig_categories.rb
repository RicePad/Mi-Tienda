class CreateGigCategories < ActiveRecord::Migration[5.1]
  def change
    create_table :gig_categories do |t|
      t.references :gig, foreign_key: true
      t.references :category, foreign_key: true

      t.timestamps
    end
  end
end
