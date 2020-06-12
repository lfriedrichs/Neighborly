class OfferSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :ask_id, :valid_until, :description, :selected
end
