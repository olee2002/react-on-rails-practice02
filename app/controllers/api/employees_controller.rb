class Api::EmployeesController < ApplicationController
def index
    @employees = Employee.all
    render json: @employees
end

def create
    @employee = Employee.create(employee_params)
end

def update
    @employee = Employee.find(params[:id])
    @employee.update(employee_params)
end

def destroy
    @employee = Employee.destroy(params[:id])
    @employees = Employee.all
    render json: @employees
end

private
def employee_params
    params.require(:employee).permit(:name, :position, :age, :email)
end
end
