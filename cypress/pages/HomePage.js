class HomePage {
    elements = {
      originInput: () => cy.get("#flight_origin1"),
      destinationInput: () => cy.get('#flight_destiny1'),
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

    openPassengerSelector(){
      this.elements.passengersSelectorBtn().click();
    }
  
    clickSearch() {
      this.elements.searchBtn().click();
    }
  
    selectOriginDestinationAndDates(origin, destination, departureDate, returnDate){
      this.elements.originInput().type(origin);
      this.elements.destinationInput().type(destination);
      //TODO: calendar picking
      return this;
    }
  }
  
  module.exports = new HomePage();