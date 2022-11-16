Feature: Flight booking

    The user is able to search and book their flights

    Background:
        Given A web browser is at the Iberia home page
        Given Accepts all cookies

    Scenario: Success flight booking
        When The user enters the origin "Barcelona"
        When The user enters the destination "Madrid"
        When Date of departure is 4 days from now
        When Return date is 3 days after departure
        When The user adds an adult and a child
        When Click on search flights
        Then The user is in search results page
        When The user selects the first tourist flight and the cheaper price
        Then The user can see all the different prices of departure tickets available
        When The user selects the last flight option and the most expensive price
        Then The user can see all the different prices of return tickets available
        Then The continue to fill passenger data button is displayed