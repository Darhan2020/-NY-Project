class formTextBox {
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
      return $$("#subject-label")[2].getText();
    }
    get labelCurrentAdress() {
      return $("currentAddress-label").getText();
      }
    get labelStateAndCity() {
      return $("#stateAndCity-label").getText();
    }  
}
    export default new formTextBox();