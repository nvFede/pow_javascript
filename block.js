const SHA256 = require('crypto-js/SHA256')

module.exports = class Block {
  constructor(height = 0, timestamp = new Date(), data, previousHash) {
    this.height = height
    this.timestamp = timestamp
    this.data      = data
    this.previousHash = previousHash
    this.nonce = 0
    this.hash = this.generateHash()
  }

  generateHash() {
    return SHA256(this.index + this.timestamp + this.data + this.nonce + this.previousHash).toString()
  }

  mineBlock(difficulty) {
    while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
        this.nonce++
        this.hash = this.generateHash()
    }
    console.log("Block mined, nonce: " + this.nonce + ", hash: " + this.hash)
  }
}
