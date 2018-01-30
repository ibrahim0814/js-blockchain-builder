const createKeccakHash = require("keccak");

// hash function
const keccak = text =>
  createKeccakHash("keccak256")
    .update(text)
    .digest("hex");

// get random integer
const randSafeInt = () => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);

//class for individual blocks
class Block {
  //note to self: required variables go first
  constructor(data) {
    this.index = 0;
    this.timestamp = new Date();
    this.data = data;
    this.previousHash = "";
    this.nonceVal = 0;
    this.hash = this.calculateHash();
  }

  //get a hash code for every new block that we have
  calculateHash() {
    return keccak(
      this.index +
        this.timestamp +
        this.previousHash +
        JSON.stringify(this.data) +
        this.nonceVal
    );
  }

  mineBlock(difficulty) {
    let beginningZeros = "";
    for (let i = 0; i < difficulty; i++) {
      beginningZeros += "0";
    }

    while (this.hash.substring(0, difficulty) !== beginningZeros) {
      this.nonceVal = randSafeInt();
      this.hash = this.calculateHash();
    }

    if (this.index !== 0) {
      console.log(`Block ${this.index} mined! Hashcode: ${this.hash}`);
    } else {
      console.log("Genesis block created!");
    }
  }
}

module.exports = Block;
