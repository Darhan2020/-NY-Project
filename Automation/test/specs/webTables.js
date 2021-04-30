const expect = require("chai").expect;
import {URLs} from "../../expect";
import webTable from "../../pageObjects/webTables";
describe('Validate Web Tables section', () => { 
    it('Click on add button and check if new modal apprars', () => {
    browser.url(URLs.webTables);
    if(!WebTable.btnAdd.isDisplayedInViewport())WebTable.btnAdd.scrollIntoView();
    WebTable.btnAdd.click();
    WebTables.modal.waitForExist({timeout:5000});
    expect(WebTable.modal.isExisting()).to.be. true;
    expect(WebTable.modalHeader).to.equal("Registration Form");

        
   
        
    });
});