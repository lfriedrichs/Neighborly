class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :phone_number, :address_line_1, :address_line_2, :city, :state, :zipcode, :neighborhood
  
  def zipcode 
    zip = self.object.zipcode
    {zipcode: {
      id: zip.id,
      zipcode: zip.zipcdoe
      }
    }
  end 

  def neighborhood   
    neighborhood = self.object.neighborhood
    {neighborhood: {
      id: neighborhood.id,
      name: neighborhood.name
      }
    }
  end 

end
