var mongoose = require("mongoose");
var esquema = mongoose.Schema;
const options = {
  useNewUrlParser: true,
  }
mongoose.connect(process.env.BOT_DB, options
, (err) => {
    if (err) return console.log("[Kofuku ERROR] Não foi possivel conectar ao banco de dados.");
    console.log("[Kofuku] Conectado com sucesso ao banco de dados.")
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

var Guild = new esquema({
    _id: {
        type: String
    },
    leveis: {
        type: Boolean,
        default: true
    },
    coins: {
        type: Boolean,
        default: true
    },

})


var Usuários = mongoose.model("Usuários", Usuários);
var Guilds = mongoose.model("Guilds", Guild);
exports.Guilds = Guilds
exports.Usuários = Usuários
