class ZipcodeNeighborhood < ApplicationRecord
    belongs_to :zipcode 
    belongs_to :neighborhood 
end
