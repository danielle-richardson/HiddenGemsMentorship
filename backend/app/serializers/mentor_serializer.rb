class MentorSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :title, :about, :image_url,:department_id, :department
end
