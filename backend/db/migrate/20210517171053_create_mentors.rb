class CreateMentors < ActiveRecord::Migration[6.0]
  def change
    create_table :mentors do |t|
      t.string :name
      t.string :title
      t.string :about
      t.string :image_url
      t.integer :department_id

      t.timestamps
    end
  end
end
