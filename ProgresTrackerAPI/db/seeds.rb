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
user2 = User.create({
  fname: 'Matthew',
  lname: 'Moon',
  picture_url: "http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/002/020/medium/Matthew_Moon_1.jpg?1490922093",
  email: 'agkura.code@gmail.com',
  github_url: 'http://github.com/Agkura',
  linkedin_url: '',
  pronouns: 'he/him/his',
  cohort_id: 1
  })

  week = 11
  day = 0
  30.times do |x|
    day += 1
    if day > 7
      week += 1
      day = day%7
    end
    Day.create({
      name: "W#{week}D#{day}",
      date: Date.parse('2017-06-05') + x,
      cohort_id: 1
      })
    end

checkin1 = Checkin.create({
  user_id: user1.id,
  day_id: Day.today(1).id,
  morning: Time.now
  })

strike1 = Strike.create({
  note: 'late morning checkin',
  user_id: user1.id,
  day_id: Day.today(1).id
  })

pair1 = Pair.create({
  user_id: user1.id,
  partner_id: user2.id,
  workstation: 'Golden Gate 1',
  day_id: Day.today(1).id,
  score: 100
  })

score1 = AssessmentScore.create({
  assessment_name: 'A01',
  score: 35,
  user_id: user1.id
  })
score2 = AssessmentScore.create({
  assessment_name: 'A02',
  score: 49,
  user_id: user1.id
  })
score3 = AssessmentScore.create({
  assessment_name: 'A03',
  score: 30,
  user_id: user1.id
  })

  stats1 = AssessmentStat.create({
    name: 'A01',
    cohort_id: 1,
    max_score: 35,
    avg_score: 33.6,
    median_score: 35,
    passing_score: 31
    })
