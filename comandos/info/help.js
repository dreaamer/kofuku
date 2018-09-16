var fs = require('fs');

exports.run = (client, message, args) => {

fs.readdir('./comandos/admin', (err, files) => {
  const admin = [];
  files.forEach(file => admin.push('kf.' + file.replace('.js', '')));

fs.readdir('./comandos/fun', (err, files) => {
  const FUN = [];
  files.forEach(file => FUN.push('kf.' + file.replace('.js', '')));


fs.readdir('./comandos/games', (err, files) => {
  const games = [];
  files.forEach(file => games.push('kf.' + file.replace('.js', '')));

fs.readdir('./comandos/image', (err, files) => {
  const image = [];
  files.forEach(file => image.push('kf.' + file.replace('.js', '')));


fs.readdir('./comandos/info', (err, files) => {
  const info = [];
  files.forEach(file => info.push('kf.' + file.replace('.js', '')));


fs.readdir('./comandos/music', (err, files) => {
  const music = [];
  files.forEach(file => music.push('kf.' + file.replace('.js', '')));


fs.readdir('./comandos/nsfw', (err, files) => {
  const nsfw = [];
  files.forEach(file => nsfw.push('kf.' + file.replace('.js', '')));

fs.readdir('./comandos/util', (err, files) => {
  const util = [];
  files.forEach(file => util.push('kf.' + file.replace('.js', '')));


let adminc = fs.readdirSync('./comandos/admin');
let aquantity = adminc.length;

let utilc = fs.readdirSync('./comandos/util');
let uquantity = utilc.length;

let fun = fs.readdirSync('./comandos/fun');
let funquantity = fun.length;

let gamesc = fs.readdirSync('./comandos/games');
let gquantity = gamesc.length;

let imagec = fs.readdirSync('./comandos/image');
let iquantity = imagec.length;

let infoc = fs.readdirSync('./comandos/info');
let inquantity = infoc.length;

let musicc = fs.readdirSync('./comandos/music');
let mquantity = musicc.length;

let nsfwc = fs.readdirSync('./comandos/nsfw');
let nquantity = nsfwc.length;

  message.channel.send({
      "embed": {
                      "author": {
            "name": `Here is my list of commands, I hope you find one that pleases you :)`,
            "icon_url": client.user.displayAvatarURL
          }, 
          "color": 0xf6546a,
          "timestamp": new Date(),
          "footer": {
              "icon_url": message.author.displayAvatarURL,
              "text": message.author.username
          },
          "fields": [{
              "name": `<:owner:486723105214169120> Admin commands [${aquantity}]`,
              "value": '``' + admin.join(', ') + '``'
            },
            {
              "name": `<:cmd:486724644364222474> Util commands [${uquantity}]`,
              "value": '``' + util.join(', ') + '``'
            },
            {
              "name": `<:tadaa:488472682870997003> Fun commands [${funquantity}]`,
              "value": '``' + FUN.join(', ') + '``'
            },
            {
              "name": `<:games:490243032084381706> Game commands [${gquantity}]`,
              "value": '``' + games.join(', ') + '``'
                          },
            {
              "name": `<:images:490243407696887809> Image commands [${iquantity}]`,
              "value": '``' + image.join(', ') + '``'
                          },
            {
              "name": `<:about:490243810815901716> Info commands [${inquantity}]`,
              "value": '``' + info.join(', ') + '``'
                          },
            {
              "name": `<:listen:487074910108254209> Music commands [${mquantity}]`,
              "value": '``' + music.join(', ') + '``'
                          },
            {
              "name": `<:nochildren:490244199224967184> Nsfw commands [${nquantity}]`,
              "value": '``' + nsfw.join(', ') + '``'


              
          }]
      }
    })
})
})
})
})
})
})
})
})
}

