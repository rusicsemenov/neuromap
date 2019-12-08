context("First test", () => {
  it("do somehing", () => {
    cy.visit("https://vialan.com.ua");
    cy.wait(9000);

    cy.get(".v-btn")
      .first()
      .click();

    cy.get('a[href*="/jsblog"]')
      .first()
      .click();

    cy.wait(1000);
    cy.get(".block")
      .eq(1)
      .scrollIntoView();

    cy.get('a[href*="/pointvialan"]')
      .first()
      .click();

    cy.trigger("mousemove", { clientX: 200, clientY: 200 });
    cy.wait(1000);
    cy.trigger("mousemove", { clientX: 800, clientY: 600 });
  });
});
