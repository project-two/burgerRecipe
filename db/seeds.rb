# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all 

include BCrypt

User.create(
    name:'kay',
    email: 'kay.bot@ga.com.au',
    password_digest: Password.create('12345'),
    admin: true,
);

User.create(
    name: 'kyle',
    email: 'kyle@ga.com.au',
    password_digest: Password.create('kyle_1234'),
    admin: true, 
)
User.create(
    name: 'daniel',
    email: 'daniel@ga.com.au',
    password_digest: Password.create('daniel_1234'),
    admin: true, 
)

puts "seeding data base created #{User.all.length}"