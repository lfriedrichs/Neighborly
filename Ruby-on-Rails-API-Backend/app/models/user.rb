class User < ApplicationRecord
    has_many :offers
    has_many :asks
    belongs_to :zipcode
    belongs_to :neighborhood


    has_secure_password 
    validates :email, :phone_number, uniqueness: true
    validates :address_line_1, :city, :state, :first_name, :last_name, :username, :password_digest, presence: true

end
