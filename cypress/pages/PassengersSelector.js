class PassengersSelector {
    elements = {
        adultsMinusBtn: () => cy.get(".fc-people-counter-important:not(.senior,.young,.teenager) button[data-people-counter-button='less']"),
        adultsPlusBtn: () => cy.get(".fc-people-counter-important:not(.senior,.young,.teenager) button[data-people-counter-button='more']"),
        adultsCounter: () => cy.get("#adult1"),
        childrenMinusBtn: () => cy.get(".fc-people-counter-children button[data-people-counter-button='less']"),
        childrenPlusBtn: () => cy.get(".fc-people-counter-children button[data-people-counter-button='more']"),
        childrenCounter: () => cy.get("#infants1"),
        babiesMinusBtn: () => cy.get(".fc-people-counter-babies button[data-people-counter-button='less']"),
        babiesPlusBtn: () => cy.get(".fc-people-counter-babies button[data-people-counter-button='more']"),
        babiesCounter: () => cy.get("#babys1")
    };

    addAnAdult(){
        this.elements.adultsPlusBtn.click();
        return this;
    }

    addAChild(){
        this.elements.childrenPlusBtn.click();
        return this;
    }

  }
  
  module.exports = new PassengersSelector();