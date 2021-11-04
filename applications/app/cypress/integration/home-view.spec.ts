describe("home-view", () => {
  it("renders", () => {
    cy.visit("/");
    expect(true).to.equal(true);
  });
});
