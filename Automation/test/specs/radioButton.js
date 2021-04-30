const expect = require("chai").expect;
import {URLs, radioButtons} from "../../expect";
import RadioButton from "../../pageObjects/radioButton";
describe('Validate Radio Button page', () => {
    it('Randomly Select Radio Button', () => {
        browser.url(URLs.radioButton);
        const selection = Math.round(Math.random() * 2);
        RadioButton.radioButtons[selection].click();
     //   expect(RadioButton.no.isEnabeled()).to.be.false;
        expect(RadioButton.textSuccsess).to.equal(RadioButton.radioButtons[selection].getText());
    });
    it(' Check the header text', () => {
        const actualHeader = $("div.main-header > Radio Button");
        expect(actualHeader).to.equal(radioButtons.header);
   
    });
});