describe("Konsole King", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("front page can be opened", () => {
    cy.contains("Konsole King");
  });

  it("login form can be opened", () => {
    cy.contains("Login").click();
    cy.contains("Welcome back");
  });

  it("user can login", () => {
    cy.contains("Login").click();
    cy.get("#loginEmail").type("test@test.com");
    cy.get("#loginPassword").type("123456");
    cy.contains("Secure Sign In").click({ force: true });
    cy.contains("Login successful!");
  });
});
