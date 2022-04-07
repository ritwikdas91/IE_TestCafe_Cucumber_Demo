Feature: Validate Duck Duck Logo
    Feature Desc
    Scenario: As  A client I should be able to see duckduck go logo
        Given I am on the homepage
        When I look at the page
        Then I expect to see the duckduckgo logo on the page

    # Scenario: As A Client I see 10 options on search suggestion
    #     Given I am on the homepage
    #     When I type "super" into the search box
    #     Then I expect to see exactly 10 suggestions in the typeahead dropdown

    # Scenario: As A Client I want to verify the first option from search suggestions
    #     Given I am on the homepage
    #     When I type "supercalafragalistic" into the search box
    #     Then I expect the first result to be "supercalafragalisticexpialadoshus"

    # Scenario: As A Client I want to verify themes link is present
    #     Given I am on the homepage
    #     When I click on the hamburger menu in the top right
    #     Then I expect to see a themes link

    # Scenario: As A Client I want to change to dark theme
    #     Given I am on the homepage
    #     When I click on the themes link then click on the dark mode theme button
    #     Then My page background should change colour

    # Scenario Outline: As A Client I want to test search with multiple values
    #     Given I am on the homepage
    #     When I go to the homepage and type <moviename>
    #     Then click the magnifying glass
    #     Then I should get 10 results on the results page
    #     Examples:
    #         | moviename |
    #         |  Back to the future   |
    #         |  BMX Bandits   |
    #         |  Rocky IV  |
    #         |  Short Circuit |
    #         |  The Terminator  |
    #         |  Ferris Bueller's day off   |

    # Scenario: As A Client I want to verify traffic of a specific year
    #     Given I am on the traffic page
    #     When I click on the "2018" Traffic section
    #     Then the Total Direct Queries should be equal to the sum of all the total directs from each month
