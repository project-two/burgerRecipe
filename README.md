# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version
ruby 2.6.4

* Configuration
after clone the repo please run
bundle install
yarn install
then ->
rails s or rails c to run project

* Database creation
rails db:create

* Database initialization
rails db:migrate db:seed

* How to run the test suite
this project does not have scope for test

* repo branch setup
please use feature branch to commit update
after approve, changes will merge to develop branch
master branch is for deployment

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

## api links

* `localhost:3000/api/users/10`

  get user name

* `localhost:3000/api/recipes`

  all recipes

* `localhost:3000/api/like_recipes?count`

  gives all likes count

* `localhost:3000/api/like_recipes?count?recipe=8`

  gives likes count on one recipe

* `localhost:3000/api/like_recipes?recipe=8`

  gives details likes on one recipe (who liked it)
 
* `localhost:3000/api/like_recipes?user=10`

  gives details likes on one user (liked what recipes) (edited) 
