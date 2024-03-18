// enigmaCrypt.js

const CryptoJS = require('crypto-js');

// Define the rotor configurations
const rotor1 = "EKMFLGDQVZNTOWYHXUSPAIBRCJ";
const rotor2 = "AJDKSIRUXBLHWTMCQGZNPYFVOE";
const rotor3 = "BDFHJLCPRTXVZNYEIWGAKMUSQO";

class EnigmaMachine {
  constructor(rotorConfigurations) {
    this.rotors = rotorConfigurations.map(rotor => rotor.split(''));
    this.reflector = "YRUHQSLDPXNGOKMIEBFZCWVJAT";
    this.position = [0, 0, 0];
  }

  setRotorPositions(positions) {
    this.position = positions;
  }

  encrypt(letter) {
    this.rotateRotors();
    const encryptedLetter = this.passThroughRotors(letter);
    return this.reflect(encryptedLetter);
  }

  decrypt(letter) {
    const reflectedLetter = this.reflect(letter);
    return this.passThroughRotors(reflectedLetter, true);
  }

  rotateRotors() {
    this.position[0] = (this.position[0] + 1) % 26;

    if (this.position[0] === 0) {
      this.position[1] = (this.position[1] + 1) % 26;
      if (this.position[1] === 0) {
        this.position[2] = (this.position[2] + 1) % 26;
      }
    }
  }

  passThroughRotors(letter, reverse = false) {
    let output = letter;
    for (let i = 0; i < this.rotors.length; i++) {
      const rotorIndex = reverse ? this.rotors.length - 1 - i : i;
      const offset = this.position[i];
      const rotatedAlphabet = this.rotateAlphabet(this.rotors[rotorIndex], offset);
      const inputIndex = rotatedAlphabet.indexOf(output);
      output = this.rotors[rotorIndex][(inputIndex + offset) % 26];
    }
    return output;
  }

  reflect(letter) {
    return this.reflector.charAt(letter.charCodeAt(0) - 65);
  }

  rotateAlphabet(alphabet, offset) {
    return alphabet.slice(offset).concat(alphabet.slice(0, offset));
  }
}

module.exports = EnigmaMachine;
