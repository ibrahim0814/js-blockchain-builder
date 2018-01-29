const createKeccakHash = require("keccak");
const randomInt = require("random-int");
const readline = require("readline-sync");
const BlockChain = require("./BlockChain");

const keccak = text =>
  createKeccakHash("keccak256")
    .update(text)
    .digest("hex");
const randSafeInt = () => randomInt(Number.MAX_SAFE_INTEGER);
const isAffirmative = text => ["y", "yes"].includes(text.toLowerCase());

console.log("Welcome to Makeshift Blockchain Maker!");
console.log("Creating new Blockchain...");
let name = readline.question("Set Blockchain name: ");
let difficulty = readline.question("Set level of difficulty: ");
const blockchain = new BlockChain(name, difficulty);

const numBlocks = readline.question("Specify number of blocks: ");

for (let i = 0; i < numBlocks; i++) {
  console.log("Mining...");
  blockchain.addBlock({ val: i });
}

const printChain = readline.question("Do you want to print this chain? ");
if (isAffirmative(printChain)) {
  console.log(`Printing ${blockchain.name}...`);
  console.log(JSON.stringify(blockchain, null, 3));
} else {
  console.log("Chain not printed");
}

const valid = readline.question("Do you want to validate this chain? ");
if (isAffirmative(valid)) {
  console.log(`Blockchain Validity: ${blockchain.validateChain()}`);
} else {
  console.log("Validation not performed");
}

console.log("Thanks for using Makeshift Blockchain Maker!");
