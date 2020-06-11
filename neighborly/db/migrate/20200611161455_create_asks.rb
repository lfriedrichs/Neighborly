class CreateAsks < ActiveRecord::Migration[6.0]
  def change
    create_table :asks do |t|
      t.string :title
      t.string :type
      t.string :description
      t.integer :userId
      t.integer :offerId
      t.datetime :validUntil

      t.timestamps
    end
  end
end
