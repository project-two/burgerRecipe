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

| link                                           | Usage                                           | return  |
| ---------------------------------------------- | ----------------------------------------------- | -----|
| /api/users/10                    | get user name | kay |
| /api/recipes                     | all recipes       |  |
| /api/like_recipes?count          | gives all likes count | 3 |
| /api/like_recipes?count&recipe=8 | gives likes count on one recipe| 1 |
| /api/like_recipes?recipe=8       | gives details likes on one recipe (who liked it)||
| /api/like_recipes?user=10        | details likes on one user (liked what recipes)||
| (POST)/api/like_recipes?user=10&recipe=8 | |
| (DELETE)/api/like_recipes?user=10&recipe=8| |
| /api/ingredients/3               | ingredient details | |
| /api/ingredients/3?name          | ingredient name    | chicken |
| /api/recipes?user=10             | get recipe of a user| |
| /api/recipes?recipe=8            | get details of a recipe | |
| (POST) /api/recipes              |   |