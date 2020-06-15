class CreateZipcodeNeighborhoods < ActiveRecord::Migration[6.0]
  def change
    create_table :zipcode_neighborhoods do |t|
      t.integer :zipcode_id
      t.integer :neighborhood_id

      t.timestamps
    end
  end
end
