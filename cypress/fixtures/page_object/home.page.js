class HomePage {
  get selectMyCarsValueButton() {
    return cy.get('[data-analytics="mycarworth_homepage_entrypoint"]');
  }

  get selectGetInstantCashOfferButton() {
    return cy.get('[data-testid="ico_content_mod"]');
  }
}

export default new HomePage();
