const expect = require("chai").expect;
import textBoxLabels from "../../expectPracticeForm"
import textBoxPracticeForm from "../../textboxPracticeForm";

describe('Validate Practice Form section', () => {
    
    it('Validate the labels in TextBox area', () => {
        browser.url("https://demoqa.com/automation-practice-form");
        expect(TextBoxPracticeForm.labelHeader).to.equal(textBoxLabels.header); 
        expect(TextBoxPracticeForm.labelName).to.equal(textBoxLabels.name);
        expect(TextBoxPracticeForm.labelEmail).to.equal(textBoxLabels.email);
        expect(TextBoxPracticeForm.labelGender).to.equal(textBoxLabels.gender);
        expect(TextBoxPracticeForm.labelMobileNumber).to.equal(textBoxLabels.mobile);
        expect(TextBoxPracticeForm.labelDateOfBirth).to.equal(textBoxLabels.dob);
        expect(TextBoxPracticeForm.labelSubjects).to.equal(textBoxLabels.subjects);
        expect(TextBoxPracticeForm.labelHobbiles).to.equal(textBoxLabels.hobbies);
        expect(TextBoxPracticeForm.labelPicture).to.equal(textBoxLabels.picture);
        expect(TextBoxPracticeForm.labelCurrentAdress).to.equal(textBoxLabels.currentAdress);
        expect(TextBoxPracticeForm.labelStateAndCity).to.equal(textBoxLabels.stateAndCity);
    });

});