class CashOfferPage {
  get selectVinInputField() {
    return cy.get('[data-testid="bi-tb-vin-entry"]');
  }

  get selectGoButton() {
    return cy.get('[data-testid="bi-btn-go"]');
  }

  get selectMilageInputField() {
    return cy.get('[data-testid="bi-tb-mileage-entry"]');
  }

  get selectGetStartedButton() {
    return cy.get('[data-testid="bi-btn-get-started"]');
  }

  get selectKeysTwoOrMoreButton() {
    return cy.get('[data-testid="vd-bt-twomorekeysquestion-yes"]').contains('Yes');
  }

  get selectModificationNoButton() {
    return cy.get('[data-testid="vd-bt-vehiclemodifications-no"]').contains('No');
  }

  get selectNextButton() {
    return cy.get('[data-testid="nav-bt-next"]');
  }

  get selectHoodTag() {
    return cy.get('[data-testid="vertical-tag-hood"]', { timeout: 30000 }).find('[data-icon="plus-circle"]');
  }

  get selectMinorScratchesOrPaintMarksButton() {
    return cy.get('[data-testid="qc-20378-minor-scratches-or-paint-marks"]');
  }

  get selectDoneButton() {
    return cy.get('[data-testid="btn--done"]');
  }

  get selectAcceptTermsAndConditions() {
    return cy.get('[data-testid="ci-cb-accept-term-cb"]');
  }

  get selectReplacementNoButton() {
    return cy.get('[data-testid="ci-replacement-no"]');
  }

  get reCaptchaVerifiedError() {
    return cy.get('#recaptchaVerifiedError');
  }

  get addPhotosPageBlock() {
    return cy
      .get('image-capture', { timeout: 20000 })
      .shadow()
      .find('h1[data-testid="imageCaptureHeader"]')
      .contains('Add Photos');
  }

  selectColor(color) {
    cy.get(`[data-testid="btn-select-color-${color}"]`).click();
  }

  selectFeaturesAndEquipment(packages) {
    cy.get(`[data-testid="vd-bt-standardequipment-${packages}"]`).click();
  }

  selectBrakingAndTraction(braking) {
    cy.get(`[data-testid="vd-bt-standardequipment-${braking}"]`).click();
  }

  selectComfortAndConvenience(comfort) {
    cy.get(`[data-testid="vd-bt-standardequipment-${comfort}"]`).click();
  }

  selectEntertainmentAndInstrumentation(entertaintment) {
    cy.get(`[data-testid="vd-bt-standardequipment-${entertaintment}"]`).click();
  }

  selectSafetyAndSecurity(safety) {
    cy.get(`[data-testid="vd-bt-standardequipment-${safety}"]`).click();
  }

  selectSeats(seats) {
    cy.get(`[data-testid="vd-bt-standardequipment-${seats}"]`).click();
  }

  fillWhereToSendForm(firstName, lastName, emailAddress, phoneNumber, zipCode) {
    cy.get('[data-testid="ci-input-firstname"]').type(firstName);
    cy.get('[data-testid="ci-input-lastname"]').type(lastName);
    cy.get('[data-testid="ci-input-email"]').type(emailAddress);
    cy.get('[data-testid="ci-input-phone"]').type(phoneNumber);
    cy.get('[data-testid="ci-input-zip"]').type(zipCode);
  }
}

export default new CashOfferPage();
