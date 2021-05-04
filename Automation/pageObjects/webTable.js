class WebTable {
  get btnAdd() {
    return $("#addNewRecordButton");
  }
  get modal() {
    return $(".modal-content");
  }
  get modalHeader() {
    return $("#registration-form-modal").getText();
  }
  get firstName() {
    return $("#firstName");
  }
  get lastName() {
    return $("#lastName");
  }
  get userEmail() {
    return $("#userEmail");
  }
  get age() {
    return $("#age");
  }
  get salary() {
    return $("#salary");
  }
  get department() {
    return $("#department");
  }
  get allFields() {
    return [
      this.firstName,
      this.lastName,
      this.userEmail,
      this.age,
      this.salary,
      this.department,
    ];
  }
  get btnSubmit() {
    return $("#submit");
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
  get inputAge() {
    return $("#age");
  }
  get inputAgePlaceholder() {
    return this.inputAge.getAttribute("placeholder");
  }
  get inputSalary() {
    return $("#salary");
  }
  get inputSalaryPlaceholder() {
    return this.inputSalary.getAttribute("placeholder");
  }
  get inputDepartment() {
    return $("#department");
  }
  get inputDepartmentPlaceholder() {
    return this.inputDepartment.getAttribute("placeholder");
  }
}

export default new WebTable();
