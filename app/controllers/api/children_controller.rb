class Api::ChildrenController < ApplicationController
    def index
        @employee = Employee.find(params[:employee_id])
        @children = @employee.children.all
        render json: @children
    end

    def create
        @employee= Employee.find(params[:employee_id])
        @employee.children.create(child_params)
    end

    def update
        @child = Child.find(params[:id])
        @child.update(child_params)
    end 

    def destroy
        @employee = Employee.find(params[:employee_id])
        @child = Child.destroy(params[:id])
        @children = @employee.children.all
        render json: @children
    end

    private
    def child_params
        params.require(:child).permit(:name, :age)
    end

end
