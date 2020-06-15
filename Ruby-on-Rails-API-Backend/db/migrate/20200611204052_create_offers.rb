class CreateOffers < ActiveRecord::Migration[6.0]
  def change
    create_table :offers do |t|
      t.integer :user_id
      t.integer :ask_id
      t.datetime :valid_until
      t.string :description
      t.boolean :selected

      t.timestamps
    end
  end
end
