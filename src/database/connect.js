const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cursonodejs.bje3h.mongodb.net/database?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log("Erro ao se conectar com o banco", error);
      }
      return console.log("Conexão bem sucedida!");
    }
  );
};

module.exports = connectToDatabase;
