class NeighborhoodController < ApplicationController
    def show 
        zipcode = current_user.zipcode
        Neighborhood.all.filter {|neighborhood| 
            neighborhood.zipcodes.include? {zipcode.zipcode}
        }
    end 

    def update 
        current_user.neighborhood=(neighborhood_params)
    end 

    private
    def neighborhood_params
      params.require(:neighborhood).permit(:id)
    end

end
