class Offer < ApplicationRecord
    belongs_to :user 
    belongs_to :ask
    validates :ask_id, :user_id, :description, :valid_until, presence: true
end
