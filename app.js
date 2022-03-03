const Block = require('./block')
const BlockChain = require('./blockchain')

let coin = new BlockChain(2)

for (var i = 1; i < 10; i++) {
  console.log(`mining block ${i}`)
  let random =  Math.floor(Math.random() * (100 - 10)) + 10;
  coin.addBlock(new Block(i, new Date(), { transferAmount: random}))
}

console.log(JSON.stringify(coin, null, 4))

//console.log(coin.validateChain())
