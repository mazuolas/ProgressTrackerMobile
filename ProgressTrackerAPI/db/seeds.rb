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
  cohort_id: 1,
  username: "mazuolas"
  })

user3 = User.create({
  fname: 'Chris',
  lname: 'Gillespie',
  picture_url: "https://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/001/984/medium/Chris_Gillespie_1.jpg?1490919981",
  email: 'christopher.d.gillespie@gmail.com',
  github_url: 'http://github.com/gillespiecd',
  linkedin_url: 'https://www.linkedin.com/in/christophergillespie/',
  pronouns: 'he/him/his',
  cohort_id: 1,
  username: "gillespiecd"
  })

user5 = User.create({
  fname: 'Christine',
  lname: 'Garibian',
  picture_url: "http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/001/981/medium/Christine_Garibian_1.jpg?1490920020",
  email: 'christinegaribian@gmail.com',
  github_url: 'http://github.com/christinegaribian',
  linkedin_url: '',
  pronouns: 'she/her/hers',
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
  cohort_id: 1,
  username: 'Agkura'
  })


user4 = User.create({
  fname: 'Tony',
  lname: 'Wang',
  picture_url: "http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/002/028/medium/Tony_Wang_1.jpg?1491003243",
  email: 'sspy45@gmail.com',
  github_url: 'http://github.com/sspy45',
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
strike2 = Strike.create({
  note: 'late lunch checkin',
  user_id: user1.id,
  day_id: Day.first.id
  })
strike3 = Strike.create({
  note: 'late morning checkin',
  user_id: user1.id,
  day_id: Day.second.id
  })
strike4 = Strike.create({
  note: 'late afternoon checkin',
  user_id: user1.id,
  day_id: Day.third.id
  })
strike5 = Strike.create({
  note: 'missing report',
  user_id: user1.id,
  day_id: Day.third.id
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

  stats2 = AssessmentStat.create({
    name: 'A02',
    cohort_id: 1,
    max_score: 49,
    avg_score: 44.4,
    median_score: 47,
    passing_score: 40
    })

  stats3 = AssessmentStat.create({
    name: 'A03',
    cohort_id: 1,
    max_score: 30,
    avg_score: 27.7,
    median_score: 30,
    passing_score: 24
    })
