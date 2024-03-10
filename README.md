# data-validator

`data-validator` is a lightweight JavaScript package for basic data validation tasks such as email addresses, URLs, and phone numbers.

## Installation

Install the package via npm:

```bash
npm install data-validator
```

## Usage

Import the package into your Node.js application:

```javascript
const validator = require('data-validator');
```

### Email Validation

```javascript
const isValidEmail = validator.isEmail('test@example.com');
console.log(isValidEmail); // true
```

### URL Validation

```javascript
const isValidURL = validator.isURL('https://www.example.com');
console.log(isValidURL); // true
```

### Phone Number Validation

```javascript
const isValidPhoneNumber = validator.isPhoneNumber('+1234567890');
console.log(isValidPhoneNumber); // true
```

## Contributing

Contributions are welcome! If you have suggestions, feature requests, or find any issues, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
