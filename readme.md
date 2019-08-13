# Blockchain Builder  

## What is this?

This is a repository containing Node scripts that allow you to build your own blockchain from the terminal! It's meant to be used primarily as a tool to educate yourself or others about how blockchain technology operates. Feel free to explore the code, read the comments, and learn about the insanely cool world of blockchain tech!

## Usage

```bash
# Install dependencies
$ npm i

# Run
$ npm start
```
## Example run

```
$ npm start

Welcome to Blockchain Builder!
Creating new Blockchain...
Set Blockchain name: My Blockchain
Set level of difficulty: 3
Mining genesis block...
Genesis block created!
Specify number of blocks: 4
Mining...
Block 1 mined! Hashcode: 000905a4b526e5851707d9ed878c28b1786ac16821677de488aab991072bc1d9
Mining...
Block 2 mined! Hashcode: 000b8237a46fb07b64f24c3c3ccbe340b37779a51fdbbec44f2e1bc7473fe505
Mining...
Block 3 mined! Hashcode: 000f8e5c1965d03c2643720d20ef0b9ec442c7eb9abcf61758bbef07a2f451ca
Mining...
Block 4 mined! Hashcode: 000147f0681e8395a728786963427121dac58830c2e92becc8071968092c2bdf
Do you want to print this chain? yes        
Printing My Blockchain...
{
   "name": "My Blockchain",
   "difficulty": "3",
   "chain": [
      {
         "index": 0,
         "timestamp": "2019-08-13T00:09:57.480Z",
         "data": "Genesis Block",
         "previousHash": "0",
         "nonceVal": 7764793301979365,
         "hash": "000f996e8b719d37cb467623f915e422fbe8b3856532b58cd4d891ee9da830af"
      },
      {
         "index": 1,
         "timestamp": "2019-08-13T00:10:00.991Z",
         "data": {
            "val": 0
         },
         "previousHash": "000f996e8b719d37cb467623f915e422fbe8b3856532b58cd4d891ee9da830af",
         "nonceVal": 8962840235927367,
         "hash": "000905a4b526e5851707d9ed878c28b1786ac16821677de488aab991072bc1d9"
      },
      {
         "index": 2,
         "timestamp": "2019-08-13T00:10:01.664Z",
         "data": {
            "val": 1
         },
         "previousHash": "000905a4b526e5851707d9ed878c28b1786ac16821677de488aab991072bc1d9",
         "nonceVal": 6494732704838765,
         "hash": "000b8237a46fb07b64f24c3c3ccbe340b37779a51fdbbec44f2e1bc7473fe505"
      },
      {
         "index": 3,
         "timestamp": "2019-08-13T00:10:01.669Z",
         "data": {
            "val": 2
         },
         "previousHash": "000b8237a46fb07b64f24c3c3ccbe340b37779a51fdbbec44f2e1bc7473fe505",
         "nonceVal": 6122984295262343,
         "hash": "000f8e5c1965d03c2643720d20ef0b9ec442c7eb9abcf61758bbef07a2f451ca"
      },
      {
         "index": 4,
         "timestamp": "2019-08-13T00:10:01.673Z",
         "data": {
            "val": 3
         },
         "previousHash": "000f8e5c1965d03c2643720d20ef0b9ec442c7eb9abcf61758bbef07a2f451ca",
         "nonceVal": 56111241933455,
         "hash": "000147f0681e8395a728786963427121dac58830c2e92becc8071968092c2bdf"
      }
   ]
}
Do you want to validate this chain? yes
Blockchain Validity: true
Thanks for using Blockchain Builder!
```
## Author
Created by Ibrahim Ali. Contact: ibrahim.ali@vanderbilt.edu
