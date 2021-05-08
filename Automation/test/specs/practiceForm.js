const expect = require("chai").expect;
import {textBoxLabels , checkBoxHobbies, registrationFormPlaceholders, studentRegistrationForm} from "../../expect";
import PracticeForm from "../../pageObjects/PracticeForm";
import {inputRegistrationForm} from "../../input";

describe('Validate Practice Form section', () => {
    it('Validate the Labels in Text Box area', () => {
        browser.maximizeWindow();
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
        PracticeForm.hobbiesSports.nextElement().click();    
        PracticeForm.hobbiesReading.nextElement().click();
        PracticeForm.hobbiesMusic.nextElement().click();
        expect(PracticeForm.hobbiesSports.nextElement().getText()).to.equal(checkBoxHobbies.sports);
        expect(PracticeForm.hobbiesReading.nextElement().getText()).to.equal(checkBoxHobbies.reading);
        expect(PracticeForm.hobbiesMusic.nextElement().getText()).to.equal(checkBoxHobbies.music);
    });
    it('Validate Student Registration Form placeholders', () => {
        expect(PracticeForm.inputFirstNamePlaceholder).to.equal(registrationFormPlaceholders.firstName);
        expect(PracticeForm.inputLastNamePlaceholder).to.equal(registrationFormPlaceholders.lastName);
        expect(PracticeForm.inputEmailPlaceholder).to.equal(registrationFormPlaceholders.email);
        expect(PracticeForm.inputMobilePlaceholder).to.equal(registrationFormPlaceholders.mobile);
        expect(PracticeForm.inputCurrentAddressPlaceholder).to.equal(registrationFormPlaceholders.currentAddress);
    });
    it('Fill Student Registration Form with Random data and submit', () => {
        let myObj = inputRegistrationForm();
        console.log(myObj);
        PracticeForm.fillForm(myObj);
        browser.pause(3000);
        PracticeForm.btnSubmit.click();
        browser.pause(3000);
        
    }); 
    // it('Fill Student Registration Form with Random data and submit', () => {
    //     expect(PracticeForm.inputFirstNamePlaceholder).to.equal(studentRegistrationForms.firstName);
    //     expect(PracticeForm.inputLastNamePlaceholder).to.equal(studentRegistrationForm.lastName);
    //     expect(PracticeForm.inputEmailPlaceholder).to.equal(studentRegistrationForm.email);
    //     expect(PracticeForm.inputMobilePlaceholder).to.equal(studentRegistrationForm.mobile);
    //     expect(PracticeForm.inputCurrentAddressPlaceholder).to.equal(studentRegistrationForm.current);
  
    });
