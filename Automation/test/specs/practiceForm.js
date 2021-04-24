const expect = require("chai").expect;
import {labels} from "../../expectPracticeForm.js";
import TextBox from "../../textboxPracticeForm.js";

describe('Validate Practice Form section', () => {
    it('Navigate to Practice Form page and check the header text', () => {
        browser.url(URLs.elements);
    });

    it('Validate the labels in TextBox area', () => {
        expect(TextBox.labelFullName).to.equal(labels.textBoxLabels.fullName);
        expect(TextBox.labelEmail).to.equal(labels.textBoxLabels.email);
        expect(TextBox.labelCurrentAddress).to.equal(labels.textBoxLabels.currentAddress);
        expect(TextBox.labelPermAddress).to.equal(labels.textBoxLabels.permAddress);
    });
});
