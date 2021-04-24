class TextBoxPracticeForm {
    get labelName() {
      return $("#userName-label").getText();
    }
    get labelEmail() {
      return $("#userEmail-label").getText();
    }
    get labelGender() {
      return $$("#genterWrapper > div")[0].getText();
    }
    get labelMobileNumber() {
      return $("#mobileNumber-label").getText();
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
      return $$("#subject-label")[2].getText();
    }
    get labelStateAndCity() {
      return $("#stateAndCity-label").getText();
    }  
}
    export default new TextBoxPracticeForm();