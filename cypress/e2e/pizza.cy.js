import { errorMessages } from "../../src/components/Order";

describe("Order Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/order");
  });
  describe("Error Messages", () => {
    it("name input throws error for 2 chars", () => {
      cy.get('[data-cy="ad-input"]').type("ha");
      cy.contains(errorMessages.adSoyad);
    });
  });
  describe("Checkbox checked", () => {
    it("more then one extras selected", () => {
      cy.get('[data-cy="pepperoni-input"]').check();
      cy.get('[data-cy="sucuk-input"]').check();
      cy.get('[data-cy="sosis-input"]').check();
    });
  });
  /*describe("Form inputs validated", () => {
    it("button enabled for validated inputs", () => {
      cy.get('[data-cy="ad-input"]').type("Hande");
      cy.get('[data-cy="submit"]').should("be.enabled");
    });
  });*/
});
