import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  const homePage = require("../../pages/HomePage");
  const passengersSelector = require("../../pages/PassengersSelector");
  
  Given("A web browser is at the Iberia home page", () => {
    cy.visit("/");
  });
  
  When("A user enters the origin {string}, the destination {string}, date of departure is {int} days from now and returns {int} days after", (origin, destination, departureDate, returnDate) => {
    homePage.selectOriginDestinationAndDates(origin,destination, departureDate, returnDate);
  });
  
  When("Adds an adult and a child", () =>{
    homePage.openPassengerSelector();
    passengersSelector.addAnAdult()
    .addAChild();
  });

  Then("The user is able to continue to search results page", () => {
    cy.url().should("contains", "flights");
  });