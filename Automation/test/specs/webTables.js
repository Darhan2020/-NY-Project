const expect = require("chai").expect;
import {URLs, webPlaceholders} from "../../expect";
import WebTable from "../../pageObjects/webTable";

describe('Validate Web Tables section', () => { 
    it('Click on add button and check if new modal apprars', () => {
    browser.url(URLs.webTable);
    if(!WebTable.btnAdd.isDisplayedInViewport())WebTable.btnAdd.scrollIntoView();
    WebTable.btnAdd.click();
    WebTable.modal.waitForExist({timeout:5000});
    expect(WebTable.modal.isExisting()).to.be. true;
    expect(WebTable.modalHeader).to.equal("Registration Form");
  });
  it('Validate all fields are required', () => {
      for(let el of WebTable.allFields){
        expect(el.getProperty('required')).to.be.true;
    }
    });
 it('Validate placeholder of all fields', () => {
     expect(WebTable.inputFirstNamePlaceholder).to.equal(webPlaceholders.firstName);
     expect(WebTable.inputLastNamePlaceholder).to.equal(webPlaceholders.lastName);
     expect(WebTable.inputAgePlaceholder).to.equal(webPlaceholders.age);
     expect(WebTable.inputEmailPlaceholder).to.equal(webPlaceholders.email);
     expect(WebTable.inputDepartmentPlaceholder).to.equal(webPlaceholders.department);
     expect(WebTable.inputSalaryPlaceholder).to.equal(webPlaceholders.salary);
 }); 
});