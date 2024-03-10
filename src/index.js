// data-validator.js

const validator = {
    isEmail: (email) => {
      // Regular expression for validating email addresses
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    
    isURL: (url) => {
      // Regular expression for validating URLs
      const urlRegex = /^(http|https):\/\/[^ "]+$/;
      return urlRegex.test(url);
    },
    
    isPhoneNumber: (phoneNumber) => {
      // Regular expression for validating phone numbers
      const phoneRegex = /^\+?[0-9]{1,3}(\s|\-)?\(?\d{3}\)?(\s|\-)?\d{3}(\s|\-)?\d{4}$/;
      return phoneRegex.test(phoneNumber);
    },
  };
  
  module.exports = validator;
  