Feature: Flight booking

    The user is able to search and book their flights

    Background:
        Given A web browser is at the Iberia home page

    Scenario: Success flight booking
        When A user enters the origin Barcelona, the destination Madrid, date of departure is 4 days from now and returns 3 days after
        When Adds an adult and a child
        Then The user is able to continue to search results page