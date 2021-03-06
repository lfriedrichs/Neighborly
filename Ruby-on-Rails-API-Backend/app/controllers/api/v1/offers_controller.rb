class OffersController < ApplicationController
    def create
        @offer = Offer.create(offer_params)
        if @offer.valid?
          render json: { offer: OfferSerializer.new(@offer)}, status: :accepted
        else
          render json: { error: 'failed to create offer' }, status: :not_acceptable
        end
    end

    def delete 
        if Offer.destroy(params[:offer][:id])
          render json: { message: 'offer deleted from database'}, status: :accepted
        else
          render json: { error: 'failed to delete offer' }, status: :not_acceptable
        end
      end

    
      private
      def offer_params
        params.require(:offer).permit(:descrition, :user_id, :ask_id, :valid_until)
      end
end
