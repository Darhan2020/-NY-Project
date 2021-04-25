class TextBoxPracticeForm {
    get labelName() {
      return $("#userName-wrapper > div.col-md-3 col-sm-12").getText();
    }
    get labelEmail() {
      return $("#userEmail-label").getText();
    }
    get labelGender() {
      return $$("#genterWrapper > div.col-md-3.col-sm-12")[0].getText();
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
    get labelCurrentAdress() {
      return $("currentAddress-label").getText();
      }
    
    get labelStateAndCity() {
      return $("#stateAndCity-label").getText();
    }  
}
    export default new TextBoxPracticeForm();