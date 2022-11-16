class CookiesPopUp {
  elements = {
    acceptAllBtn: () => cy.get("#onetrust-accept-btn-handler")
  };

  acceptAllCookies() {
    this.elements.acceptAllBtn().click();
  }

}

module.exports = new CookiesPopUp();
  