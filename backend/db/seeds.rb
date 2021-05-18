# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Department.destroy.all
Mentor.destroy.all 

tech = Department.create(name: "Technology")
admin = Department.create(name: "Administration")
operations = Department.create(name: "Operations") 

Mentor.create(name: "Olivia Pope", title: "Operations Manager", about: "I have been working at the company 20 years and love spotting rising talent", image_url: "https://i.insider.com/5b9a970d3cccd127008b45cd?width=700", department_id: operations.id)