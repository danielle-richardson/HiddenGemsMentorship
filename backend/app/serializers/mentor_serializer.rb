class MentorSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :title, :about, :image_url,:department_id, :department
  belongs_to :department
end
