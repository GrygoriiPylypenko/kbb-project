import CashOfferPage from '../fixtures/page_object/cash.offer.page';
import HomePage from '../fixtures/page_object/home.page';
import { faker } from '@faker-js/faker';
let testVehicle;
let firstName;
let lastName;
let emailAddress;
let phoneNumber;
let zipCode;

describe('End-To-End test for instant cash offer', () => {
  before('Load fixtures, faker data and visit main page', () => {
    cy.fixture('vehicleTestData.json').then($data => {
      testVehicle = $data;
    });
    firstName = faker.person.firstName();
    lastName = faker.person.lastName();
    emailAddress = faker.internet.email();
    phoneNumber = faker.phone.number();
    zipCode = faker.location.zipCode();
    cy.visit('/');
  });

  it('Should submit form for instant cash offer', () => {
    HomePage.selectMyCarsValueButton.click();
    HomePage.selectGetInstantCashOfferButton.click();
    CashOfferPage.selectVinInputField.type(testVehicle.vin);
    CashOfferPage.selectGoButton.click();
    cy.contains(testVehicle.vin).should('exist');
    CashOfferPage.selectMilageInputField.type(testVehicle.mileage);
    CashOfferPage.selectGetStartedButton.click();
    cy.contains(testVehicle.year).should('exist');
    cy.contains(testVehicle.make).should('exist');
    cy.contains(testVehicle.model).should('exist');
    cy.contains(testVehicle.trim).should('exist');
    cy.contains(testVehicle.vin).should('exist');
    cy.contains(testVehicle.engine).should('exist');
    cy.contains(testVehicle.transmisson).should('exist');
    cy.contains(testVehicle.drivetrain).should('exist');
    CashOfferPage.selectColor(testVehicle.color);
    CashOfferPage.selectFeaturesAndEquipment(testVehicle.package);
    CashOfferPage.selectBrakingAndTraction(testVehicle.braking);
    CashOfferPage.selectComfortAndConvenience(testVehicle.comfort);
    CashOfferPage.selectEntertainmentAndInstrumentation(testVehicle.entertaintment);
    CashOfferPage.selectSafetyAndSecurity(testVehicle.safety);
    CashOfferPage.selectSeats(testVehicle.seats[0]);
    CashOfferPage.selectSeats(testVehicle.seats[1]);
    CashOfferPage.selectKeysTwoOrMoreButton.should('be.visible').click()
    CashOfferPage.selectModificationNoButton.should('be.visible').click()
    CashOfferPage.selectNextButton.click({ force: true });
    CashOfferPage.addPhotosPageBlock.should('be.visible');
    CashOfferPage.selectNextButton.click({ force: true });
    CashOfferPage.selectHoodTag.click();
    CashOfferPage.selectMinorScratchesOrPaintMarksButton.click();
    CashOfferPage.selectDoneButton.click();
    CashOfferPage.selectNextButton.click();
    cy.contains('Your Contact Information').should('exist');
    CashOfferPage.fillWhereToSendForm(firstName, lastName, emailAddress, phoneNumber, zipCode);
    CashOfferPage.selectAcceptTermsAndConditions.check();
    CashOfferPage.selectReplacementNoButton.click();
    CashOfferPage.selectNextButton.contains('Get My Offer').click();
    CashOfferPage.reCaptchaVerifiedError.should('be.visible');
  });
});
