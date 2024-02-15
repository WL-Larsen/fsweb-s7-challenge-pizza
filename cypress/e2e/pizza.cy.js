describe("template spec", ()=>{
    it("passes",()=>{
        cy.visit("order")
    })
});

it(' Input text entry test',()=>{
    cy.visit('order');
    cy.get('#siparisNotu').type('Hi, Cypress!');
    cy.get("[data-cy='order-button']").click();
});

it('Multiple material selection testing', () => {
    cy.visit('order');
    cy.get(':nth-child(10) > label > input').check(); 
    cy.get(':nth-child(6) > label > input').check(); 
    cy.get(':nth-child(4) > label > input').check();
    cy.get(':nth-child(1) > label > input').check();   
  });

  it('Check that you are redirected to the correct page', () => {
    cy.visit('order');
    cy.get('[data-cy="order-button"]').click();
    cy.url().should('include', 'orderConfirmation');

  });
