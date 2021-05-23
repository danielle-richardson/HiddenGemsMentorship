# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Department.destroy_all
Mentor.destroy_all 

tech = Department.create(name: "Technology")
admin = Department.create(name: "Administration")
operations = Department.create(name: "Operations") 
accountfinance = Department.create(name: "Account & Finance")
salesmarketing = Department.create(name: "Sales & Marketing") 
hr = Department.create(name: "Human Resource") 





Mentor.create(name: "Joseph Gonzalez", title: "Chief Operating Officer", about: "I have been working at the company 20 years and love spotting rising talent!", image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80", department_id: operations.id)
Mentor.create(name: "Naomi Campbell", title: "Chief Technology Officer", about: "I have been mentored throughout my career and I am here to return the gift of mentorship.", image_url: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80", department_id: tech.id)
Mentor.create(name: "Jane Landly", title: "Administrative Manager", about: "If your goal is to get into upper management I have the resources you need!", image_url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80", department_id: admin.id)
Mentor.create(name: "Ben Stone", title: "Chief Accountant", about: "I enjoy my work and I like to help bringing joy to the work environment.", image_url: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80", department_id: accountfinance.id)
Mentor.create(name: "Tyler Nix", title: "Sales Manager", about: "I am a people-person and can help bring you out your shell!", image_url: "https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80", department_id: salesmarketing.id)
Mentor.create(name: "Sarah Pope", title: "Human Resource Manager", about: "I have been at the company for 10 years and I would love to share the knowledge that I've gained.", image_url: "https://images.unsplash.com/photo-1507331789086-893e9003c0e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80", department_id: hr.id)
