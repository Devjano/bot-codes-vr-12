const Discord = require("discord.js");
const jano = new Discord.Client();
const fs = require("fs");
const moment = require("moment");
const ms = require("ms");
const prefix = "/";
const { JANO, Collection } = require("discord.js");
// Collections by jano
jano.commands = new Collection();
jano.aliases = new Collection();

jano.on("message", message => {
  if (message.content === "/help") {
    const embed = new Discord.MessageEmbed()
      .setColor("#000000")
      .setDescription(
        `
**==================
__**Public Command**__

==================
<a:jano_1:799896150592847872><a:jano_3:799897611142037554>/code jwab
===================
<a:jano_1:799896150592847872><a:jano_3:799897611142037554>/code anti bot
===================
<a:jano_1:799896150592847872><a:jano_3:799897611142037554>/code U
===================
<a:jano_1:799896150592847872><a:jano_3:799897611142037554>/code ban
===================
<a:jano_1:799896150592847872><a:jano_3:799897611142037554>/code avatar
===================
<a:jano_1:799896150592847872><a:jano_3:799897611142037554>/code support
===================
<a:jano_1:799896150592847872><a:jano_3:799897611142037554>/code avatar acc
===================
<a:jano_1:799896150592847872><a:jano_3:799897611142037554>/code dzha link
===================
<a:jano_1:799896150592847872><a:jano_3:799897611142037554>/code ticked
===================
<a:jano_1:799896150592847872><a:jano_3:799897611142037554>/code kick
===================
<a:jano_1:799896150592847872><a:jano_3:799897611142037554>/code sbot
===================
<a:jano_1:799896150592847872><a:jano_3:799897611142037554>/code oflin
===================
<a:jano_1:799896150592847872><a:jano_3:799897611142037554>/code stop
===================
<a:jano_1:799896150592847872><a:jano_3:799897611142037554>/code start
===================
<a:jano_1:799896150592847872><a:jano_3:799897611142037554>/code token
===================
<a:jano_1:799896150592847872><a:jano_3:799897611142037554>/code anti reklam
===================
<a:jano_1:799896150592847872><a:jano_3:799897611142037554>/code react
===================
<a:jano_1:799896150592847872><a:jano_3:799897611142037554>/code allbot
===================
<a:jano_1:799896150592847872><a:jano_3:799897611142037554>/code server
===================
<a:jano_1:799896150592847872><a:jano_3:799897611142037554>/code here
===================
<a:jano_1:799896150592847872><a:jano_3:799897611142037554>/code everyone
===================
<a:jano_1:799896150592847872><a:jano_3:799897611142037554>/code say
===================
<a:jano_1:799896150592847872><a:jano_3:799897611142037554>/code clear
===================
<a:jano_1:799896150592847872><a:jano_3:799897611142037554>/code mute
===================
<a:jano_1:799896150592847872><a:jano_3:799897611142037554>/code unmute
===================

{ bo dawa krdne project la glitch }

===================
<a:jano_1:799896150592847872><a:jano_3:799897611142037554>/glitch acc1
===================
<a:jano_1:799896150592847872><a:jano_3:799897611142037554>/glitch acc2
===================
<a:jano_1:799896150592847872><a:jano_3:799897611142037554>/glitch spam
===================
<a:jano_1:799896150592847872><a:jano_3:799897611142037554>/glitch securety
===================
<a:jano_1:799896150592847872><a:jano_3:799897611142037554>/glitch system
===================
/about {بـــۆ زا نیـــاری لـــەســـەر بـــۆ تـــە کــــە }

/invite  { بـــۆ ڕا کـــێشـــانی بــــۆتـــەکــــە }

/support { بــــۆ ســــە پـــۆڕت کـــردنی ســــێر ڤـــەر }

===================**
`
      )
      .setURL("https://discord.gg/DhDhK2B7Yz")
      .setTitle("support - Server");
    message.channel.send(embed);
  }
});
///////////////////
jano.on("message", message => {
  if (message.content === "/code say") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("=--> qsa krdn ba bot  <--=")
      .setURL(
        "https://pastebin.com/9aAfXp5J"
      );
    message.channel.send(embed);
  }
});
/////////////////////
jano.on("message", message => {
  if (message.content === "/code unmute") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("=--> bo krdnaway mute kasek  <--=")
      .setURL(
        "https://pastebin.com/t8X7b1QA"
      );
    message.channel.send(embed);
  }
});
////////////////////
jano.on("message", message => {
  if (message.content === "/code mute") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("=--> bo mute krdne kasek ba kardet  <--=")
      .setURL(
        "https://pastebin.com/huYKSCnY"
      );
    message.channel.send(embed);
  }
});
  //////////////////
jano.on("message", message => {
  if (message.content === "/code everyone") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("=--> dzha everyone  <--=")
      .setURL(
        "https://pastebin.com/zxQez14B"
      );
    message.channel.send(embed);
  }
});
  ////////////////
jano.on("message", message => {
  if (message.content === "/code clear") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("=--> bo rash krdnaway chat <--=")
      .setURL(
        "https://pastebin.com/jnQSYWYm"
      );
    message.channel.send(embed);
  }
});
/////////////////
jano.on("message", message => {
  if (message.content === "/invite") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("=--> بـــۆ ڕا کـــێــشــــانــــی بــــۆ تـــــە کــــە <--=")
      .setURL(
        "https://discord.com/api/oauth2/authorize?client_id=794460515317186570&permissions=8&scope=bot"
      );
    message.channel.send(embed);
  }
});
////////////////////////// code jwab danawa
jano.on("message", message => {
  if (message.content === "/code jwab") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("=--> jwabe member datadawa aw coda <--=")
      .setURL(
        "https://pastebin.com/uiQY7uFN"
      );
    message.channel.send(embed);
  }
});
////////////////////////// code anti bot
jano.on("message", message => {
  if (message.content === "/code anti bot") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("=--> nahelet bot beta zhurawa <--=")
      .setURL(
        "https://pastebin.com/GUmHdQfc"
      );
    message.channel.send(embed);
  }
});
////////////////// code zaneny invite
jano.on("message", message => {
  if (message.content === "/code U") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("=--> bo away bzany chan kast invite krdea <--=")
      .setURL(
        "https://pastebin.com/TCN0Y1uQ"
      );
    message.channel.send(embed);
  }
});
/////////////////code ban member
jano.on("message", message => {
  if (message.content === "/code ban") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("=--> bo band krdne member krdnaway hamw bandakany membe la server <--=")
      .setURL(
        "https://pastebin.com/9knhqYia"
      );
    message.channel.send(embed);
  }
});
////////////////////////code avatar
jano.on("message", message => {
  if (message.content === "/code avatar") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("=--> bo dar henay wenay sar profile <--=")
      .setURL(
        "https://pastebin.com/mHF2bphX"
      );
    message.channel.send(embed);
  }
});
//////////////////////// code support
jano.on("message", message => {
  if (message.content === "/code support") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("=--> bo sapport krdne server <--=")
      .setURL(
        "https://pastebin.com/uHvtSsqB"
      );
    message.channel.send(embed);
  }
});
////////////////// code avatar acc face
jano.on("message", message => {
  if (message.content === "/code avatar acc") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("=--> bo goreny wenay acc face <--=")
      .setURL(
        "https://pastebin.com/UuqJXK5d"
      );
    message.channel.send(embed);
  }
});
/////////////////// code dzha link
jano.on("message", message => {
  if (message.content === "/code dzha link") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("=--> code dzha linka nahelet link da bney <--=")
      .setURL(
        "https://pastebin.com/6bLawcC3"
      );
    message.channel.send(embed);
  }
});
////////////////// code ticked tool
jano.on("message", message => {
  if (message.content === "/code ticked") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("=--> bo raxnaw peshnyar ba kar det <--=")
      .setURL(
        "https://pastebin.com/QcwHVFmx"
      );
    message.channel.send(embed);
  }
});
//////////////// code kick member
jano.on("message", message => {
  if (message.content === "/code kick") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("=--> bo kick krdne member <--=")
      .setURL(
        "https://pastebin.com/KZWkNW7e"
      );
    message.channel.send(embed);
  }
});
//////////////// code zanen bott la server
jano.on("message", message => {
  if (message.content === "/code sbot") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("=--> bo away bzany botakat join ch server daka ya left <--=")
      .setURL(
        "https://pastebin.com/EBBbqmgU"
      );
    message.channel.send(embed);
  }
});
////////////////////// code oflin member
jano.on("message", message => {
  if (message.content === "/code oflin") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("=--> member oflin bet chat bka agadary dakatawa  <--=")
      .setURL(
        "https://pastebin.com/F9daQMgy"
      );
    message.channel.send(embed);
  }
});
/////////////////////
jano.on("message", message => {
  if (message.content === "/code stop") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("=--> bo stop krdne acc spam <--=")
      .setURL(
        "https://pastebin.com/huNRVe2z"
      );
    message.channel.send(embed);
  }
});
////////////////
jano.on("message", message => {
  if (message.content === "/code start") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("=--> bo spam krdn ba acc  <--=")
      .setURL(
        "https://pastebin.com/3G9Sdjax"
      );
    message.channel.send(embed);
  }
});
////////////////
jano.on("message", message => {
  if (message.content === "/code token") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("=--> bo away bzany token chanama he acc   <--=")
      .setURL(
        "https://pastebin.com/TsH57hW9"
      );
    message.channel.send(embed);
  }
});
/////////////////
jano.on("message", message => {
  if (message.content === "/code anti reklam") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("=--> nahelet reklam bkay hata role dyare krawe lo naday   <--=")
      .setURL(
        "https://pastebin.com/k6SAgXBn"
      );
    message.channel.send(embed);
  }
});
///////////////
jano.on("message", message => {
  if (message.content === "/code react") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("=--> code ryact  <--=")
      .setURL(
        "https://pastebin.com/xQDfWThQ"
      );
    message.channel.send(embed);
  }
});
//////////////
jano.on("message", message => {
  if (message.content === "/code allbot") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("=--> bo away bzany chan bot la serverta <--=")
      .setURL(
        "https://pastebin.com/0UDaa0mv"
      );
    message.channel.send(embed);
  }
});
///////////
jano.on("message", message => {
  if (message.content === "/code server") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("=--> zanyare lasar servert <--=")
      .setURL(
        "https://pastebin.com/4rCLY62Z"
      );
    message.channel.send(embed);
  }
});
////////////////// 
jano.on("message", message => {
  if (message.content === "/code here") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("=--> code anti here nahelet here le bday hata role dyare krawe naday <--=")
      .setURL(
        "https://pastebin.com/Tdqts3Fu"
      );
    message.channel.send(embed);
  }
});
///////////////////
//////////////////////
/////////////////////
/////////////////////glitch
jano.on("message", message => {
  if (message.content === "/glitch acc1") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("=--> accounte onlin deta vc join server aka <--=")
      .setURL(
        "https://glitch.com/edit/#!/accounte-face"
      );
    message.channel.send(embed);
  }
});
//////////////////glitch
jano.on("message", message => {
  if (message.content === "/glitch acc2") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("=--> tanha onlina account join naka nayata vc <--=")
      .setURL(
        "https://glitch.com/edit/#!/wonderful-gold-product?path=jano.js%3A1%3A0"
      );
    message.channel.send(embed);
  }
});
//////////////////glitch 
jano.on("message", message => {
  if (message.content === "/glitch spam") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("=--> spam krdn ba account <--=")
      .setURL(
        "https://glitch.com/edit/#!/spot-alabaster-kingfisher"
      );
    message.channel.send(embed);
  }
});
///////////////glitch
jano.on("message", message => {
  if (message.content === "/glitch system") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("=--> bote system he xoma<--=")
      .setURL(
        "https://glitch.com/edit/#!/hallengejanupupupup?path=jano.js%3A1%3A0"
      );
    message.channel.send(embed);
  }
});
//////////////////
jano.on("message", message => {
  if (message.content === "/glitch securety") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("=--> bote securety he xoma <--=")
      .setURL(
        "https://glitch.com/edit/#!/petal-fog-single?path=jano.js%3A2%3A55"
      );
    message.channel.send(embed);
  }
});
//////// code support /////

jano.on("message", message => {
  if (message.content.startsWith(prefix + "support")) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`[Support](https://discord.gg/DhDhK2B7Yz)`)
      .setTimestamp()
      .setFooter(`By: ${message.author.tag}`)
      .setAuthor(jano.user.username)
      .setThumbnail(message.author.avatarURL)
      .setColor("BLACK");
    message.channel.send(embed);
    message.react("✅");
  }
});

/////////////////

/////// ///////
/////// ///////
/////// ///////
/////// ///////
/////// ///////
///////playing///////
jano.on("ready", () => {
  setInterval(() => {
    console.log(`${jano.user.username} owner jano,
)}, server ${jano.guilds.cache.size}
  `);
    jano.user.setActivity(
      `/help | Server ${jano.guilds.cache.size} and  Users ${jano.users.cache.size}`
    );
  }, 15000);
});
//////  ///////
//////  ///////
//////  ///////
//////  ///////
////// code invite ///////
const invites = {};
const wait = require("util").promisify(setTimeout);
jano.on("ready", () => {
  wait(1000);
  jano.guilds.cache.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  }); ///By jano
});
/////// ///////
/////// ///////
/////// ///////


///////////////// code about ////////////////
jano.on("message", message => {
  if (message.content === "/about") {
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")

      .addField("**Name** : ", `» ${jano.user.tag} `, true)

      .addField("**Guilds** : ", `» ${jano.guilds.cache.size}  guilds`, true)

      .addField("**USERS** : ", `» ${jano.users.cache.size}  users`, true)

      .addField("**Owner** : ", `<@681553671364018196>`, true)

      .setImage(
        "https://cdn.discordapp.com/attachments/696796419595567108/741981480653291570/image0-40.gif"
      );
    message.channel.send(embed);
  }
});

jano.login("Nzk0NDYwNTE1MzE3MTg2NTcw.X-7JAw.sLAj-w5wKlRShM9aQFIhgE_ysic"); /////
