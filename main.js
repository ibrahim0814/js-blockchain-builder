const createKeccakHash = require('keccak');
const randomInt = require('random-int');
const readline = require('readline-sync');

const keccak = text =>
    createKeccakHash('keccak256')
        .update(text)
        .digest('hex');
const randSafeInt = () => randomInt(Number.MAX_SAFE_INTEGER);
const isAffirmative = text => ['y', 'yes'].includes(text.toLowerCase());

//class for individual blocks
class Block {
    //note to self: required variables go first
    constructor(data) {
        this.index = 0;
        this.timestamp = new Date();
        this.data = data;
        this.previousHash = '';
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
        let beginningZeros = '';
        for (let i = 0; i < difficulty; i++) {
            beginningZeros += '0';
        }

        while (this.hash.substring(0, difficulty) !== beginningZeros) {
            this.nonceVal = randSafeInt();
            this.hash = this.calculateHash();
        }

        console.log(`Block ${this.index} mined! Hashcode: ${this.hash}`);
    }
}

//class for our chain
class BlockChain {
    constructor() {
        this.name = readline.question('Set Blockchain name: ');
        this.difficulty = readline.question('Set level of difficulty: ');
        this.chain = [this.createGenesisBlock()];
    }

    //need to manually create our first block called the 'genesis' block
    createGenesisBlock() {
        let genesis = new Block('Genesis Block');
        genesis.index = 0;
        genesis.previousHash = '0';
        genesis.timestamp = new Date();
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

console.log('Welcome to Makeshift Blockchain Maker!');
console.log('Creating new Blockchain...');
const blockchain = new BlockChain();

const blocks = readline.question('Specify number of blocks: ');

for (let i = 0; i < blocks; i++) {
    console.log('Mining...');
    blockchain.addBlock({ val: i });
}

const printChain = readline.question('Do you want to print this chain? ');
if (isAffirmative(printChain)) {
    console.log(`Printing ${blockchain.name}...`);
    console.log(JSON.stringify(blockchain, null, 3));
} else {
    console.log('Chain not printed');
}

const valid = readline.question('Do you want to validate this chain? ');
if (isAffirmative(valid)) {
    console.log(`Blockchain Validity: ${blockchain.validateChain()}`);
} else {
    console.log('Validation not performed');
}

console.log('Thanks for using Makeshift Blockchain Maker!');
