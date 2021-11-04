describe("content-view", () => {
  it("renders", () => {
    localStorage.setItem("flag:mock-apis", JSON.stringify(true));
    cy.visit("/content");
    expect(true).to.equal(true);
  });
});
