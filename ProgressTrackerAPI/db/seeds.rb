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

user2 = User.create({
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

user3 = User.create({
  fname: 'Christine',
  lname: 'Garibian',
  picture_url: "http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/001/981/medium/Christine_Garibian_1.jpg?1490920020",
  email: 'christinegaribian@gmail.com',
  github_url: 'http://github.com/christinegaribian',
  linkedin_url: '',
  pronouns: 'she/her/hers',
  cohort_id: 1,
  username: 'christinegaribian'
  })

user4 = User.create({
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


user5 = User.create({
  fname: 'Tony',
  lname: 'Wang',
  picture_url: "http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/002/028/medium/Tony_Wang_1.jpg?1491003243",
  email: 'sspy45@gmail.com',
  github_url: 'http://github.com/sspy45',
  linkedin_url: '',
  pronouns: 'he/him/his',
  cohort_id: 1,
  username: 'the-one-true-tony'
  })

user6 = User.create({
  fname: 'Ranelle',
  lname: 'Reyes',
  picture_url: "http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/001/995/medium/Ranelle_Reyes_1.jpg?1490921930",
  email: 'ranelle.reyes@gmail.com',
  github_url: 'https://github.com/ranellereyes',
  linkedin_url: '',
  pronouns: 'he/him/his',
  cohort_id: 1,
  username: 'ranellereyes'
  })

user7 = User.create({
  fname: 'Aaron',
  lname: 'Wayne',
  picture_url: "http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/001/957/medium/Aaron_Wayne_1.jpg?1490998414",
  email: 'amwayne90@gmail.com',
  github_url: 'http://github.com/niartenyaw',
  linkedin_url: '',
  pronouns: 'he/him/his',
  cohort_id: 1,
  username: 'niartenyaw'
  })

user8 = User.create({
  fname: 'Winber',
  lname: 'Xu',
  picture_url: "http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/001/982/medium/Winber_Xu_1.jpg?1491000757",
  email: 'winber1@gmail.com',
  github_url: 'http://github.com/winber2',
  linkedin_url: '',
  pronouns: 'he/him/his',
  cohort_id: 1,
  username: 'winber2'
  })

user9 = User.create({
  fname: 'Sunny',
  lname: 'Rekhi',
  picture_url: "http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/002/023/medium/Sunny_Rekhi.jpg?1490921286",
  email: 'rohit.rekhi@gmail.com',
  github_url: 'http://github.com/srekhi',
  linkedin_url: '',
  pronouns: 'he/him/his',
  cohort_id: 1,
  username: 'srekhi'
  })

user10 = User.create({
  fname: 'Robin',
  lname: 'Wilborn',
  picture_url: "http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/001/966/medium/Robin_Willborn_1.jpg?1490921839",
  email: 'rtwilborn@gmail.com',
  github_url: 'http://github.com/wilbooorn',
  linkedin_url: '',
  pronouns: 'he/him/his',
  cohort_id: 1,
  username: 'wilbooorn'
  })


week = 11
day = 0
50.times do |x|
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



users = User.all

users.each do |user|
  strike1 = Strike.create({
    note: 'late morning checkin',
    user_id: user.id,
    day_id: Day.today(1).id
  })
  strike2 = Strike.create({
    note: 'late lunch checkin',
    user_id: user.id,
    day_id: Day.first.id
  })
  strike3 = Strike.create({
    note: 'late morning checkin',
    user_id: user.id,
    day_id: Day.second.id
  })
  strike4 = Strike.create({
    note: 'late afternoon checkin',
    user_id: user.id,
    day_id: Day.third.id
  })
  strike5 = Strike.create({
    note: 'missing report',
    user_id: user.id,
    day_id: Day.third.id
  })
  Day.all.each do |day|
    pair = user
    while user.id == pair.id
      pair = users.sample
    end
    pair1 = Pair.create({
      user_id: user.id,
      partner_id: pair.id,
      workstation: "Golden Gate #{(1..13).to_a.sample}",
      day_id: day.id,
      score: 100
      })
  end

  score1 = AssessmentScore.create({
    assessment_name: 'A01',
    score: 35,
    user_id: user.id
    })
  score2 = AssessmentScore.create({
    assessment_name: 'A02',
    score: 49,
    user_id: user.id
    })
  score3 = AssessmentScore.create({
    assessment_name: 'A03',
    score: 15,
    user_id: user.id
    })
  score4 = AssessmentScore.create({
    assessment_name: 'A04',
    score: 61,
    user_id: user.id
    })
  score5 = AssessmentScore.create({
    assessment_name: 'A05',
    score: 36,
    user_id: user.id
    })
  end

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
stats4 = AssessmentStat.create({
  name: 'A04',
  cohort_id: 1,
  max_score: 61,
  avg_score: 56.1,
  median_score: 61,
  passing_score: 49
  })
stats5 = AssessmentStat.create({
  name: 'A05',
  cohort_id: 1,
  max_score: 36,
  avg_score: 34.6,
  median_score: 36,
  passing_score: 31
  })
