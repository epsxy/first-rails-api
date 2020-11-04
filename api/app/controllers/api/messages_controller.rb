class Api::MessagesController < ApplicationController
    # GET /messages
    def index
        @messages = Message.all
        render json: @messages
    end

    # GET /messages/:id
    def show
        begin
            @message = Message.find(params[:id])
            render :json => @message
        rescue ActiveRecord::RecordNotFound => exception
            render :json => exception, status: 404
        rescue => exception
            render json: { error: exception }, status: 500
        end
    end

    # POST /messages
    def create
        @message = Message.new(message_params)
        begin
            @message.save
            render :json => @message, status: 201
        rescue => exception
            render :json => exception, status: 500
        end
    end

    # PUT /messages/:id
    def update 
        begin
            @message = Message.find(params[:id])
            @message.update(message_params)
            render :json => @message
        rescue => exception
            render :json => exception, status: 500
        end
    end

    # DELETE /messages
    def destroy_all
        begin
            @messages = Message.all
            @messages.destroy_all
        rescue => exception
            render :json => exception, status: 500
        end
    end
    
    # DELETE /messages/:id
    def destroy
        begin
            @message = Message.find(params[:id])
            @message.destroy
            render json: {}, status: 204
        rescue ActiveRecord::RecordNotFound => exception
            render json: { error: exception }, status: 404
        rescue => exception
            render :json => exception, status: 500
        end
    end

    private

    def message_params
        params.require(:message).permit(:author, :recipient, :private, :content)
    end
end
