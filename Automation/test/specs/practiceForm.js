const expect = require("chai").expect;
import {labels} from "../../expectPracticeForm.js";
import TextBoxPracticeForm from "../../textboxPracticeForm.js";

describe('Validate Practice Form section', () => {
    it('Navigate to Practice Form page and check the header text', () => {
        browser.url("https://demoqa.com/forms");
            const header = $(".main-header");
            expect(header.getText()).to.equal(labels.mainHeader); 
    });

    it('Validate the labels in TextBox area', () => {
        expect(TextBoxPracticeForm.labelName).to.equal(labels.textBoxLabels.name);
        expect(TextBoxPracticeForm.labelEmail).to.equal(labels.textBoxLabels.email);
        expect(TextBoxPracticeForm.labelGender).to.equal(labels.textBoxLabels.gender);
        expect(TextBoxPracticeForm.labelMobileNumber).to.equal(labels.textBoxLabels.mobile);
        expect(TextBoxPracticeForm.labelDateOfBirth).to.equal(labels.textBoxLabels.dob);
        expect(TextBoxPracticeForm.labelSubjects).to.equal(labels.textBoxLabels.subjects);
        expect(TextBoxPracticeForm.labelHobbiles).to.equal(labels.textBoxLabels.hobbies);
        expect(TextBoxPracticeForm.labelPicture).to.equal(labels.textBoxLabels.picture);
        expect(TextBoxPracticeForm.labelCurrentAdress).to.equal(labels.textBoxLabels.currentAdress);
        expect(TextBoxPracticeForm.labelStateAndCity).to.equal(labels.textBoxLabels.stateAndCity)
    });
});
