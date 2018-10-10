class Employee < ApplicationRecord
has_many :children,   dependent: :destroy
end
