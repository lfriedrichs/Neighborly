class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.integer :phone_number
      t.string :address_line_1
      t.string :address_line_2
      t.string :city
      t.string :state
      t.integer :zipcode_id
      t.integer :neighborhood_id

      t.timestamps
    end
  end
end
