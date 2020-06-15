class AskSerializer < ActiveModel::Serializer
  attributes :id, :ask_id, :title, :type, :description, :offer, :validUntil

end
