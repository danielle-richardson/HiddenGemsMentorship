class Mentor < ApplicationRecord
    belongs_to :department, dependent: :destroy

    validates :title, presence: true

end
