const { MongoClient } = require('mongodb');

const mongoURL = 'mongodb://localhost:27017/emojifier';

module.exports = {
  saveFace(imageUrl, data) {
    MongoClient.connect(mongoURL, { useNewUrlParser: true }, (err, db) => {
      if (err) throw err;
      const dbo = db.db();
      // TODO: insert the object into the database
      
    });
  },

  getFace(imageUrl, callback) {
    MongoClient.connect(mongoURL, { useNewUrlParser: true }, (err, db) => {
      // TODO: get the object from the database and send as parameter to the callback
    });
  }
}
