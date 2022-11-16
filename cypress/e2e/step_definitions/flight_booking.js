import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
const homePage = require("../../pages/HomePage");
const cookiesPopUp = require("../../pages/CookiesPopUp");
const passengersSelector = require("../../pages/PassengersSelector");
const searchResultsPage = require("../../pages/SearchResultsPage");

Given("A web browser is at the Iberia home page", () => {
  cy.visit("/");
});

Given("Accepts all cookies", () => {
  cookiesPopUp.acceptAllCookies();
});

When("The user enters the origin {string}", (origin) => {
  homePage.typeOrigin(origin);
});

When("The user enters the destination {string}", (destination)=>{
  homePage.typeDestination(destination);
})

When("Date of departure is {int} days from now", (daysFromNow)=>{
  homePage.selectDepartureDate();
})

When("Return date is {int} days after departure", (daysAfter)=>{
  homePage.selectReturnDay();
})

When("The user adds an adult and a child", () =>{
  homePage.openPassengerSelector();
  passengersSelector.addAnAdult()
  .addAChild();
});

When("Click on search flights", ()=>{
  homePage.clickSearch();
})

Then("The user is in search results page", () => {
  cy.url().should("contains", "flights");
});

When("The user selects the first tourist flight and the cheaper price", ()=>{
  searchResultsPage.selectFirstTouristTicketOption();
  searchResultsPage.selectDepartureBasicTicketType();
})

Then("The user can see all the different prices of departure tickets available", ()=>{
  searchResultsPage.allDepartureTicketOptionsAreAvailable();
})

When("The user selects the last flight option and the most expensive price", ()=>{
  searchResultsPage.selectLastTouristTicketOption();
  searchResultsPage.selectReturnConfortTicketType();
})

Then("The user can see all the different prices of return tickets available", ()=>{
  searchResultsPage.allReturnTicketOptionsAreAvailable();
})

Then("The continue to fill passenger data button is displayed", ()=> {
  searchResultsPage.continueToFillPassengerButtonIsVisible();
})