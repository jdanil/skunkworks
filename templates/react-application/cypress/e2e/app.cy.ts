describe("app", () => {
  it("renders", () => {
    cy.visit("/");
    cy.get('[data-testid="app"]').contains("Hello, World!").should("exist");
  });
});
