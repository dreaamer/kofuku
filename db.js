var mongoose = require("mongoose");
var esquema = mongoose.Schema;
const options = {
  useNewUrlParser: true,
  }
mongoose.connect("mongodb://kofuku:71716263a@ds249311.mlab.com:49311/blue", options
, (err) => {
    if (err) return console.log("[Lala ERROR] Não foi possivel conectar ao banco de dados.");
    console.log("[Lala] Conectado com sucesso ao banco de dados")
})

var Usuários = new esquema({
    _id: {
        type: String
    },
        xp: {
        type: Number,
        default: 0
    },
    level: {
        type: Number,
        default: 0
    },

    coins: {
        type: Number,
        default: 0
    },
    rep :{
        type: Number,
        default: 0
    },
})


var Usuários = mongoose.model("Usuários", Usuários);
exports.Usuários = Usuários