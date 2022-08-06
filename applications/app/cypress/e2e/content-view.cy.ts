describe("content-view", () => {
  it.skip("renders", () => {
    localStorage.setItem("flag:mock-apis", JSON.stringify(true));
    cy.visit("/content");
    // TODO: add expectation and un-skip.
  });
});
