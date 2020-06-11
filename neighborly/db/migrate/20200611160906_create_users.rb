class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :firstName
      t.string :lastName
      t.string :email
      t.integer :phoneNumber
      t.string :addressLine1
      t.string :addressLine2
      t.string :city
      t.string :state
      t.integer :zipcode
      t.integer :neighborhoodId

      t.timestamps
    end
  end
end
