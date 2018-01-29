const Block = require("./Block");
//class for our chain
class BlockChain {
  constructor(name, difficulty) {
    this.name = name;
    this.difficulty = difficulty;
    this.chain = [this.createGenesisBlock()];
  }

  //need to manually create our first block called the 'genesis' block
  createGenesisBlock() {
    let genesis = new Block("Genesis Block");
    genesis.index = 0;
    genesis.previousHash = "0";
    genesis.timestamp = new Date();
    console.log("Mining genesis block...");
    genesis.mineBlock(this.difficulty);
    return genesis;
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(data) {
    //in order to calculate a new hash for the block, we need to supply it with a value for previousHash (initially it was blank) in addition to an index, timestamp
    let newBlock = new Block(data);
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.index = this.getLatestBlock().index + 1;
    newBlock.timestamp = new Date();

    //calculate new hashcode. we have to mine for it (mineblock sets the hashcode in the method so no need to set it here)
    newBlock.mineBlock(this.difficulty);

    //push to chain
    this.chain.push(newBlock);
  }

  validateChain() {
    for (let i = 1; i < this.chain.length; i++) {
      let currBlock = this.chain[i];
      let prevBlock = this.chain[i - 1];

      if (currBlock.hash !== currBlock.calculateHash()) {
        return false;
      }

      if (prevBlock.hash !== currBlock.previousHash) {
        return false;
      }
    }
    return true;
  }
}

module.exports = BlockChain;
