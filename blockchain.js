const Block = require('./block')

module.exports = class Blockchain {
  constructor(difficulty) {
    this.chain = [this.#generateGenesisBlock()]
    this.difficulty = difficulty
  }

  getLastBlock() {
    return this.chain[this.chain.length - 1]
  }

  #generateGenesisBlock() {
    return new Block(
      '0', // height
      new Date(), // timestamp
      'Genesis Block', // data
      '0', // nonce
      '0' // previousHash
     )
  }

  

  addBlock(newBlock) {
    newBlock.previousHash = this.getLastBlock().hash
    newBlock.mineBlock(this.difficulty)
    this.chain.push(newBlock);
  }

  validateChain() {
    for (var i = 0; i < this.chain.length; i++) {
      let currentBlock = this.chain[i]
      let previousBlock = this.chain[i-1]

      // console.log(previousBlock)

      if ( currentBlock.previousHash !== previousBlock.generateHash() ) {
        console.log("this blockchain is invalid!")
        return false
      }
      //
      // if ( currentBlock.hash !== this.generateHash()) {
      //   console.log("this blockchain is invalid!")
      //   return false
      // }
    }
    console.log('Valid blockchain')
    return true
  }
}
