Feature: Like on test.lumen.ceek.com
  Me as a user 
  want to like a video

  Scenario: Like
    Given I am on the login page do login
  	When I log in and go to discover and click on like button
  	Then The video must be liked
