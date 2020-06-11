class CreateZipcodes < ActiveRecord::Migration[6.0]
  def change
    create_table :zipcodes do |t|
      t.string :zipcode

      t.timestamps
    end
  end
end
