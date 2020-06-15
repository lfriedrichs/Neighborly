class Api::V1::AuthController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def create
      byebug
      @user = User.find_by(username: user_login_params[:username])
      if @user && @user.authenticate(user_login_params[:password])
        token = encode_token({ user_id: @user.id })
        render json: { user: UserSerializer.new(@user), jwt: token }, status: :accepted
      elsif @user
        render json: { message: 'Invalid password' }, status: :unauthorized
      else 
        render json: { message: 'Username does not exist' }, status: :unauthorized
      end
    end
  
    private
  
    def user_login_params
      params.permit(:username, :password)
    end
end
