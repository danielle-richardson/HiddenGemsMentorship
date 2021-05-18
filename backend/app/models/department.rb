class Department < ApplicationRecord
    has_many :mentors, dependent: :destroy
end
