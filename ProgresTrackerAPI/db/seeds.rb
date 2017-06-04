# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create({
  fname: 'mark',
  lname: 'azuolas',
  picture_url: "http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/002/007/medium/Mark_Azuolas_1.jpg?1491339652",
  email: 'markazuolas@gmail.com',
  github_url: 'https://github.com/mazuolas',
  linkedin_url: 'https://www.linkedin.com/in/mark-azuolas-6b8b0a13b/',
  pronouns: 'he/him/his',
  cohort_id: 1
  })

day1 = Day.create({
  name: 'W10D6',
  date: Date.today,
  cohort_id: 1
  })

  checkin1 = Checkin.create({
    user_id: user1.id,
    day_id: day1.id,
    morning: Time.now
    })
