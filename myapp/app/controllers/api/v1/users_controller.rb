class Api::V1::UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]
    
    def home
      render json: { newsFeed: newsFeed(current_user) }, status: :accepted
    end

    def create
        userInfo = user_params
        zipcode = Zipcode.find_by(zipcode: params[:user][:zipcode])
        if zipcode
          userInfo[:zipcode_id] = zipcode[:id]
          @user = User.create(userInfo)
          if @user.valid?
            render json: { user: UserSerializer.new(@user) }, status: :created
          else
            render json: { error: 'failed to create user' }, status: :not_acceptable
          end
        else 
          render json: { error: 'Your address is outside of our coverage area' }, status: :not_acceptable
        end
      end

      def update
        userInfo = user_params
        @user = current_user
        if params[:user][:zipcode]
          zipcode = Zipcode.find_by(zipcode: params[:user][:zipcode])
          if zipcode
            userInfo[:zipcode_id] = zipcode[:id]
          else 
            render json: { error: 'Your new address is outside of our coverage area' }, status: :not_acceptable
            return true
          end
        end
        @user.update(userInfo)
          if @user.valid?
            render json: { user: UserSerializer.new(@user) }, status: :updated
          else
            render json: { error: 'failed to update user' }, status: :not_acceptable
          end
      end
    
      private
      def user_params
        params.require(:user).permit(:username, :password, :first_name, :last_name, :address_line_1, :address_line_2, :city, :state, :email, :phone_number)
      end

      def newsFeed(user)
        Asks.all.filter {|ask| 
        ask.user.object.neighborhood_id == current_user.neighborhood_id
        }.map {|ask|
        AskSerializer.new(ask)
        } 
      end
end
