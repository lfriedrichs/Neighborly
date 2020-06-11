class User < ApplicationRecord
    has_secure_password 
    validates :email, uniqueness: { case_sensitive: false }
    validates :phone_number, uniqueness: 

end
