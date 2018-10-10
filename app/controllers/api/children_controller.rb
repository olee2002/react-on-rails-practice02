class Api::ChildrenController < ApplicationController
    def index
        @employee = Employee.find(params[:employee_id])
        @children = @employee.children.all
        render json: @children
    end
end
