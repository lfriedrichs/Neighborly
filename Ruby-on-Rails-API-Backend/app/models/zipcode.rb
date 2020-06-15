class Zipcode < ApplicationRecord
    has_many :users
    has_many :zipcode_neighborhoods
    has_many :neighborhoods, through: :zipcode_neighborhoods
    validates :zipcode, presence: true
end
