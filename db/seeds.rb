User.destroy_all
kay = User.create(
  name: "kay",
  email: "kay.bot@ga.com.au",
  password: "12345",
  admin: true,
)

kyle = User.create(
  name: "kyle",
  email: "kyle@ga.com.au",
  password: "kyle_1234",
  admin: true,
)
daniel = User.create(
  name: "daniel",
  email: "daniel@ga.com.au",
  password: "daniel_1234",
  admin: true,
)

puts "seeding User, created #{User.all.length}"

# recipes
Recipe.destroy_all
r1 = Recipe.create(
  user_id: kay.id,
  name: "Kay's first recipe",
  serve: 2,
  instruction: "no worries",
  url: "https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80",
)

r2 = Recipe.create(
  user_id: kyle.id,
  name: "Kyle's first recipe",
  serve: 10,
  instruction: "no worries",
  url: "https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
)

r3 = Recipe.create(
  user_id: daniel.id,
  name: "Daniel's first recipe",
  serve: 5,
  instruction: "no worries",
  url: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=964&q=80",
)
puts "seeding Recipe, created #{Recipe.all.length}"

#liked recipes
LikeRecipe.create(user_id: kay.id, recipe_id: r1.id)
LikeRecipe.create(user_id: kay.id, recipe_id: r2.id)
LikeRecipe.create(user_id: kay.id, recipe_id: r3.id)
