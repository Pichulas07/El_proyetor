/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-namespace, @typescript-eslint/no-unused-vars
declare namespace Cypress {
 interface Chainable {
 getBySel(selector: string, ...args: any[]): Chainable<JQuery<HTMLElement>>;
 getFirstBySel(
 parentSelector: string,
 childSelector: string,
 ...args: any[]
 ): Chainable<JQuery<HTMLElement>>;
 }
}
