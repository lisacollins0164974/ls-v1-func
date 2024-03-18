# Ls-v1-func

Ls-v1-func is a Node.js module that provides functions for encryption and decryption using the Enigma machine algorithm.

## Installation

Install the module via npm: `npm install ls-v1-func`

## Usage

```javascript
const EnigmaMachine = require('enigma-crypt');

// Example usage
const enigma = new EnigmaMachine(['EKMFLGDQVZNTOWYHXUSPAIBRCJ', 'AJDKSIRUXBLHWTMCQGZNPYFVOE', 'BDFHJLCPRTXVZNYEIWGAKMUSQO']);
enigma.setRotorPositions([0, 0, 0]);

const encryptedMessage = enigma.encrypt('HELLO');
console.log(encryptedMessage); // Output: 'ILBMO'

const decryptedMessage = enigma.decrypt(encryptedMessage);
console.log(decryptedMessage); // Output: 'HELLO'
```

