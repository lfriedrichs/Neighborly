class CreateAsks < ActiveRecord::Migration[6.0]
  def change
    create_table :asks do |t|
      t.integer :user_id
      t.string :offer_id
      t.string :integer
      t.datetime :valid_until
      t.string :description
      t.string :type
      t.string :title

      t.timestamps
    end
  end
end
