Feature: Login functionality

  Scenario: User logs in successfully
    Given I open the login page
    When I enter username and password
    And I click login button
    Then I should see the dashboard
