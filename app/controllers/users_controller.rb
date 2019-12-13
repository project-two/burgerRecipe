class UsersController < ApplicationController

    before_action :authorize_request, only: [
        :get_by_id, :update_user, :delete_user 
    ]

    def create_user
            userParams = params.require(:user)
              .permit(:name, :email, :password, :password_confirmation)
            user = User.new(userParams);
            if user.save()
                render json: user, status: :created 
            else 
                render json: { errors: user.errors.full_messages }, 
                       status: :unprocessable_entity
            end
    end

    def get_by_id
        user = User.find(params[:user_id])

        if user

            render json: user, status: :ok
        else
            render json: { errors: 'User not found' }, status: :not_found
        end
    end

    def update_user
    end

    def delete_user
    end

    def get_token
        user = User.find_by_email(params[:email])

        if !user 
            render json: { error: 'unauthorized' }, status: :unauthorized
            return
        end

        if !user.authenticate( params[:password] )
            render json: { error: 'unauthorized' }, status: :unauthorized
            return
        end

        token = jwt_encode({user_id: user.id}, 24.hours.from_now)
        render json: {token: token, exp: 24, username: user.email, userId: user.id},
               status: :ok
    end
end