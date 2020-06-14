class Ask < ApplicationRecord
    belongs_to :user 
    has_many :offers
    validates :title, :type, :descrition, :user_id, :valid_until, present:
end
