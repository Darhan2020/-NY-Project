class RadioButton {
get yes(){
    return $('label[for = "yesRadio"]');

}
get no(){
    return $('label[for = "noRadio"]');
}
get noInput(){
    return $("#noRadio");
}
get impressive(){
   return $('label[for = "impressiveRadio"]');
}
get radioButtons(){
    return [this.yes, this.no, this.impressive];
}
get textSuccsess(){
    return $('.text-success').getText();
}
    get headerRadioButton() {
        return $('#main-header').getText();
    }
}

export default new RadioButton(); 