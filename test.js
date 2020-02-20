const fs = require('fs');
const { JSDOM } = require('jsdom');
const vm = require('vm');

const validationJs = fs.readFileSync('validation.js', 'utf8');
const validateHTML = fs.readFileSync('validation.html', 'utf8');

document = new JSDOM(validateHTML).window.document;

HTMLElement = class { 
  attachShadow() { 
    return document.querySelector('my-input')
  }
};

customElements = {
  define: function () { }
};

const script = new vm.Script(validationJs);
script.runInThisContext();

const comp = new MyInput();

var assert = require('assert');
describe('my-input', function() {
  describe('.validate()', function() {
    it('should return true when validating numbers with "123"', function() {
      document.querySelector('#input').value = '123';
      assert.equal(comp.validate(), true);
    });

    it('should return false when validating numbers with "abc"', function() {
      document.querySelector('#input').value = 'abc';
      assert.equal(comp.validate(), false);
    });

    it('should return true when validating letters with "abc"', function() {
      document.querySelector('[name=validation-type][value=letter]').checked = true;
      document.querySelector('#input').value = 'abc';
      assert.equal(comp.validate(), true);
    });

    it('should return false when validating letters with "123"', function() {
      document.querySelector('#input').value = '123';
      assert.equal(comp.validate(), false);
    });
    it('should return false when validating password if 3 consecutive numbers are encountered', function() {
      document.querySelector('#input').value = '@123as';
      assert.equal(comp.validate(), false);
    });
    it('should return false when validating password if there is no special character encountered', function() {
      document.querySelector('#input').value = '12as3';
      assert.equal(comp.validate(), false);
    });
    it('should not return false when validating password if there are no three consecutive numbers and a special char.', function() {
      document.querySelector('#input').value = '12@as3';
      assert.equal(comp.validate(), false);
    });
  });
});
