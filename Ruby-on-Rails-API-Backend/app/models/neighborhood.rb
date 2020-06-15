class Neighborhood < ApplicationRecord
    has_many :users
    has_many :zipcode_neighborhoods
    has_many :zipcods, through: :zipcode_neighborhoods
    validates :name, presence: true
end
