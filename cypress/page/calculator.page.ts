class CalculatorPage {
  clickButtonWithLocation() {
    cy.get("iframe").then(($iframe) => {
      const iframeElement = $iframe.contents().find("body");
      cy.wrap(iframeElement)
        .type("1")
        .type("+")
        .type("2")
        .type("=");
    });
  }
}

export default CalculatorPage;
