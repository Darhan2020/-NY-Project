const expect = require("chai").expect;
import {textBoxLabels} from "../../expectPracticeForm";
import formTextBox from "../../textBoxPracticeForm";

describe('Validate Practice Form section', () => {
    it('Validate the Labels in Text Box area', () => {
        browser.url("https://demoqa.com/automation-practice-form");
        expect(formTextBox.labelHeader).to.equal(textBoxLabels.header);
        expect(formTextBox.labelName).to.equal(textBoxLabels.name);
        expect(formTextBox.labelEmail).to.equal(textBoxLabels.email);
        expect(formTextBox.labelGender).to.equal(textBoxLabels.gender);
        expect(formTextBox.labelMobileNumber).to.equal(textBoxLabels.mobile);
        expect(formTextBox.labelDateOfBirth).to.equal(textBoxLabels.dob);
        expect(formTextBox.labelSubjects).to.equal(textBoxLabels.subjects);
        expect(formTextBox.labelHobbies).to.equal(textBoxLabels.hobbies);
        expect(formTextBox.labelPicture).to.equal(textBoxLabels.picture);
        expect(formTextBox.labelCurrentAddress).to.equal(textBoxLabels.currentAddress);
        expect(formTextBox.labelStateAndCity).to.equal(textBoxLabels.stateAndCity);
    });
});