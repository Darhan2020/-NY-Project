class PracticeForm {
  get labelHeader(){
    return $$("#app > div > div > div.pattern-backgound.playgound-header > div")[0].getText();
  }
  get labelName() {
    return $("#userName-label").getText();
  }
  get labelEmail() {
    return $("#userEmail-label").getText();
  }
  get labelGender() {
    return $$("#genterWrapper > div.col-md-3.col-sm-12")[0].getText();
  }
  get labelMobileNumber() {
    return $("#userNumber-label").getText();
  }
  get labelDateOfBirth() {
    return $("#dateOfBirth-label").getText();
  }
  get labelSubjects() {
    return $$("#subjects-label")[0].getText();
  }
  get labelHobbies() {
    return $$("#subjects-label")[1].getText();
  }
  get labelPicture() {
    return $$("#subjects-label")[2].getText();
  }
  get labelCurrentAddress() {
    return $("#currentAddress-label").getText();
  }
  get labelStateAndCity() {
    return $("#stateCity-label").getText();
  }  
  get hobbiesSports() {
    return $("#hobbies-checkbox-1");
  }
  get hobbiesReading() {
    return $("#hobbies-checkbox-2");
  }
  get hobbiesMusic() {
    return $("#hobbies-checkbox-3");
  }
  get inputFirstName() {
    return $("#firstName");
  }
  get inputFirstNamePlaceholder() {
    return this.inputFirstName.getAttribute("placeholder");
  }
  get inputLastName() {
    return $("#lastName");
  }
  get inputLastNamePlaceholder() {
    return this.inputLastName.getAttribute("placeholder");
  }
  get inputEmail() {
    return $("#userEmail");
  }
  get inputEmailPlaceholder() {
    return this.inputEmail.getAttribute("placeholder");
  }
  get inputMobile() {
    return $("#userNumber");
  }
  get inputMobilePlaceholder() {
    return this.inputMobile.getAttribute("placeholder");
  }
  get inputCurrentAddress() {
    return $("#currentAddress");
  }
  get inputCurrentAddressPlaceholder() {
    return this.inputCurrentAddress.getAttribute("placeholder");

  }
  fillForm(obj) {
    this.inputFirstName.setValue(obj.firstName);
    this.inputLastName.setValue(obj.lastName);
    this.inputEmail.setValue(obj.email);
    this.inputMobile.setValue(obj.mobile);
    this.inputCurrentAddress.setValue(obj.currentAddress);
  
  }
  get btnSubmit() {
    return $("#submit");
  }

}
  export default new PracticeForm();
