class AsksController < ApplicationController

    def create
        @ask = Ask.create(ask_params)
        if @ask.valid?
          render json: { ask: AskSerializer.new(@ask)}, status: :accepted
        else
          render json: { error: 'failed to create ask' }, status: :not_acceptable
        end
    end

    def delete 
      if Ask.destroy(params[:ask][:id])
        render json: { message: 'ask deleted from database'}, status: :accepted
      else
        render json: { error: 'failed to delete ask' }, status: :not_acceptable
      end
    end

    def update
      ask = Ask.find(params[:ask][:id])
      offer_id = params[:ask][:offer_id]
      ask.offer_id = offer_id
      offer = Offer.find(offer_id)
      offer.ask = ask
      if ask.valid? && offer.valid?
        render json: { message: 'offer selected'}, status: :accepted
      else
        render json: { error: 'failed to select offer' }, status: :not_acceptable
      end
    end

    
      private
      def ask_params
        params.require(:ask).permit(:title, :type, :descrition, :user_id, :valid_until)
      end
end
