const expect = require("chai").expect;
import {textBoxLabels , checkBoxHobbies, registrationFormPlaceholders} from "../../expect";
import PracticeForm from "../../pageObjects/PracticeForm";

describe('Validate Practice Form section', () => {
    it('Validate the Labels in Text Box area', () => {
        browser.url("https://demoqa.com/automation-practice-form");
        expect(PracticeForm.labelHeader).to.equal(textBoxLabels.header);
        expect(PracticeForm.labelName).to.equal(textBoxLabels.name);
        expect(PracticeForm.labelEmail).to.equal(textBoxLabels.email);
        expect(PracticeForm.labelGender).to.equal(textBoxLabels.gender);
        expect(PracticeForm.labelMobileNumber).to.equal(textBoxLabels.mobile);
        expect(PracticeForm.labelDateOfBirth).to.equal(textBoxLabels.dob);
        expect(PracticeForm.labelSubjects).to.equal(textBoxLabels.subjects);
        expect(PracticeForm.labelHobbies).to.equal(textBoxLabels.hobbies);
        expect(PracticeForm.labelPicture).to.equal(textBoxLabels.picture);
        expect(PracticeForm.labelCurrentAddress).to.equal(textBoxLabels.currentAddress);
        expect(PracticeForm.labelStateAndCity).to.equal(textBoxLabels.stateAndCity);
    });
    it('Validate checkbox Hobbies', () => {
        if (!PracticeForm.hobbiesSports.isDisplayedInViewport())  PracticeForm.hobbiesSports.scrollIntoView();
        PracticeForm.hobbiesSports.click();    
        PracticeForm.hobbiesReading.click();
        PracticeForm.hobbiesMusic.click();
        expect(PracticeForm.hobbiesSports.getText()).to.equal(checkBoxHobbies.sports);
        expect(PracticeForm.hobbiesReading.getText()).to.equal(checkBoxHobbies.reading);
        expect(PracticeForm.hobbiesMusic.getText()).to.equal(checkBoxHobbies.music);
    });
    it('Validate Student Registration Form placeholders', () => {
        expect(PracticeForm.inputFirstNamePlaceholder).to.equal(registrationFormPlaceholders.firstName);
        expect(PracticeForm.inputLastNamePlaceholder).to.equal(registrationFormPlaceholders.lastName);
        expect(PracticeForm.inputEmailPlaceholder).to.equal(registrationFormPlaceholders.email);
        expect(PracticeForm.inputMobilePlaceholder).to.equal(registrationFormPlaceholders.mobile);
        expect(PracticeForm.inputCurrentAddressPlaceholder).to.equal(registrationFormPlaceholders.currentAddress);
    });
});
