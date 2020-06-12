class AsksController < ApplicationController

    def create
        @ask = Ask.create(ask_params)
        if @ask.valid?
          render json: { ask: AskSerializer.new(@ask)}, status: :accepted
        else
          render json: { error: 'failed to create ask' }, status: :not_acceptable
        end
    end

    
      private
      def ask_params
        params.require(:ask).permit(:title, :type, :descrition, :user_id, :valid_until)
      end
end
