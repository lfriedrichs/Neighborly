class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :phone_number, :address_line_1, :address_line_2, :city, :state, :zipcode, :neighborhood
  
  def zipcode 
    {zipcode: self.object.zipcode}
  end 

  def neighborhood   
    {neighborhood: self.object.name}
  end 

end
