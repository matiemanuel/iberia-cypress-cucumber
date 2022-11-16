class HomePage {
    elements = {
      originInput: () => cy.get("#flight_origin1"),
      destinationInput: () => cy.get('#flight_destiny1'),
      calendarIdLocator: "#searcher-calendar-1",
      departureDateInput: () => cy.get('#flight_round_date1'),
      returnDateInput: () => cy.get('#flight_return_date1'),
      passengersSelectorBtn: () => cy.get("#flight_passengers1"),
      searchBtn: () => cy.get('#buttonSubmit1')
    };
  
    typeOrigin(origin) {
      this.elements.originInput().type(origin);
      return this;
    }

    typeDestination(destination) {
      this.elements.destinationInput().type(destination);
      return this;
    }

    selectDepartureDate(){
      this.elements.departureDateInput().click();
      cy.get(this.calendarIdLocator + " .actualDate-1_1_2022").click();
    }

    selectReturnDay(){
      this.elements.returnDateInput().click();
      cy.get(this.calendarIdLocator + " .actualDate-1_1_2022").click();
    }

    openPassengerSelector(){
      this.elements.passengersSelectorBtn().click();
    }
  
    clickSearch() {
      this.elements.searchBtn().click();
    }
  }
  
  module.exports = new HomePage();