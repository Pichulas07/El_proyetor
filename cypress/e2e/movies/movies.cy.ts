describe("Movie Details Page", () => {
    it("should display the number of movie card", () => {
        cy.visit("/");
        cy.location("pathname").should("eq", "/");
        cy.get("[data-cy=movies-botton]").click();
        cy.location("pathname").should("eq", "/movies");
        cy.get("[data-cy=movie-card]").should("have.length", 7);
    })

    it("should display the corret title of the movie card", () => {

        const expectedTitles = [
        "Wall-E", 
        "Cars", 
        "Toy Story", 
        "Ratatouille", 
        "Coco", 
        "A Minecraft Movie", 
        "Five Nights at Freddy's"
        ];


        cy.visit("/");
        cy.location("pathname").should("eq", "/");
        cy.get("[data-cy=movies-botton]").click();
        cy.location("pathname").should("eq", "/movies");
        cy.get("[data-cy=movie-title]").should("have.length", expectedTitles.length).each(($el, index) => {
          cy.wrap($el).should("contain.text", expectedTitles[index]);
      });
    })
})