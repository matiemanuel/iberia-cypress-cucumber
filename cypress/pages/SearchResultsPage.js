class SearchResultsPage {
    elements = {
        firstTouristTicketButton: () => cy.get("article button[id*=E]:first"),
        departureBasicRadioButton: () => cy.get("#radioFare-basica-E-0"),
        departureOptimalRadioButton: () => cy.get("#radioFare-optima-E-0"),
        departureConfortRadioButton: () => cy.get("#radioFare-confort-E-0"),
        lastTouristTicketButton: () => cy.get("article button[id*=E]:last"),
        returnBasicRadioButton: () => cy.get("#radioFare-basica-E-1"),
        returnOptimalRadioButton: () => cy.get("#radioFare-optima-E-1"),
        returnConfortRadioButton: () => cy.get("#radioFare-confort-E-1"),
        continueButton: () => cy.get("#AVAILABILITY_CONTINUE_BUTTON")
    };
  
    selectFirstTouristTicketOption() {
        this.elements.firstTouristTicketButton().click();
        return this;
    }

    allDepartureTicketOptionsAreAvailable(){
        this.elements.departureBasicRadioButton().should('be.visible'),
        this.elements.departureOptimalRadioButton().should('be.visible'),
        this.elements.departureConfortRadioButton().should('be.visible')
    }

    selectDepartureBasicTicketType(){
        this.elements.departureBasicRadioButton().click();
    }

    selectLastTouristTicketOption() {
        this.elements.lastTouristTicketButton().click();
        return this;
    }

    allReturnTicketOptionsAreAvailable(){
        this.elements.returnBasicRadioButton().should('be.visible'),
        this.elements.returnOptimalRadioButton().should('be.visible'),
        this.elements.returnConfortRadioButton().should('be.visible')
    }

    selectReturnConfortTicketType(){
        this.elements.returnConfortRadioButton().click();
    }

    continueToFillPassengerButtonIsVisible(){
        this.elements.continueButton().should('be.visible');
    }
}
  
module.exports = new SearchResultsPage();