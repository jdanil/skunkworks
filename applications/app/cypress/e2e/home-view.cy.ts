describe("home-view", () => {
  it("renders", () => {
    cy.visit("/");
    cy.get('[data-testid="home-view"]')
      .contains("Hello, World!")
      .should("exist");
  });
});
