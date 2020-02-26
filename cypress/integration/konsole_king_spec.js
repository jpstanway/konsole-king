describe("Konsole King", () => {
  context("login", () => {
    before(() => {
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
      cy.wait(5000);
    });

    it("user can logout", () => {
      cy.contains("Logout").click({ force: true });
      cy.contains("Successfully logged out");
    });
  });

  context("adding items", () => {
    before(() => {
      cy.visit("http://localhost:3000");
      cy.contains("Login").click();
      cy.wait(1000);
      cy.get("#loginEmail").type("test@test.com");
      cy.get("#loginPassword").type("123456");
      cy.contains("Secure Sign In").click({ force: true });
      cy.contains("Login successful!");
    });

    it("user can add item to cart", () => {
      cy.contains("Browse").click({ force: true });
      cy.wait(1000);
      cy.contains("PlayStation 3").click({ force: true });
      cy.wait(1000);
      cy.contains("Add To Cart").click({ force: true });
      cy.get("#cart-total").contains("$89.99");
    });

    it("user can remove item from cart", () => {
      cy.get("#cart-btn").click({ force: true });
      cy.contains("Checkout");
      cy.get("#cart-remove").click({ force: true });
      cy.contains("Cart is empty");
    });

    it("user can add item to wishlist", () => {
      cy.contains("Browse").click({ force: true });
      cy.wait(1000);
      cy.contains("PlayStation Vita").click({ force: true });
      cy.wait(1000);
      cy.contains("Add To Wishlist").click({ force: true });
      cy.contains("Wishlist(1)").click({ force: true });
      cy.wait(1000);
      cy.contains("PlayStation Vita");
    });

    it("user can remove item from wishlist", () => {
      cy.contains("Remove").click({ force: true });
      cy.get("PlayStation Vita").should("not.exist");
    });

    after(() => {
      cy.contains("Logout").click({ force: true });
      cy.contains("Successfully logged out");
    });
  });
});
