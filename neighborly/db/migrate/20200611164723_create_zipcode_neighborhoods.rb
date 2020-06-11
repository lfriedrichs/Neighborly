class CreateZipcodeNeighborhoods < ActiveRecord::Migration[6.0]
  def change
    create_table :zipcode_neighborhoods do |t|
      t.integer :zipcodeId
      t.integer :neighborhoodId

      t.timestamps
    end
  end
end
