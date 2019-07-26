const BlockClass = require('./block');

let block = new BlockClass.Block('Some Random Data');

block.generateHash()
      .then((value)=>{
          console.log(value);
      })
      .catch((e)=>{
        console.log(e)
      })
