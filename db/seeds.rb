User.create(
  name: "kay",
  email: "kay.bot@ga.com.au",
  password: "12345",
  admin: true,
)

User.create(
  name: "kyle",
  email: "kyle@ga.com.au",
  password: "kyle_1234",
  admin: true,
)
User.create(
  name: "daniel",
  email: "daniel@ga.com.au",
  password: "daniel_1234",
  admin: true,
)

puts "seeding User, created #{User.all.length}"
