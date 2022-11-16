class PassengersSelector {
    elements = {
        adultsPlusBtn: () => cy.get(".fc-people-counter-important:not(.senior,.young,.teenager) button[data-people-counter-button='more']"),
        childrenPlusBtn: () => cy.get(".fc-people-counter-children button[data-people-counter-button='more']")
    };

    addAnAdult(){
        this.elements.adultsPlusBtn().click();
        return this;
    }

    addAChild(){
        this.elements.childrenPlusBtn().click();
        return this;
    }

  }
  
  module.exports = new PassengersSelector();