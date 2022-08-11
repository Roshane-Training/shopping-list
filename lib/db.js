const mongoose = require('mongoose')

mongoose.connect(process.env.DBHOST + "/shopping-list", (err) => {
   if (err) {
       console.log(`\tMongoDB failed to connect @ ${process.env.DBHOST}`)
       console.error(err)
       exit(-1)
   } else {
       console.log("\tMongoDB succesfully connected...")
   }
})

module.exports = mongoose