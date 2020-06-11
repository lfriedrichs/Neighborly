class CreateOffers < ActiveRecord::Migration[6.0]
  def change
    create_table :offers do |t|
      t.integer :userId
      t.integer :askId
      t.string :description
      t.datetime :validUntil
      t.boolean :selected

      t.timestamps
    end
  end
end
