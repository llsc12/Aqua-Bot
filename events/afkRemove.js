const enmap = require('enmap'), data = new enmap({ name: "botdata", dataDir:"./data"}), discord = require('discord.js')
module.exports = {
  name:"message",
  execute(eventOut) {
    let message = eventOut
    if (data.get(`user.${message.author.id}.afk.reason`)) {
      if (((Date.now()/1000).toFixed(0) - data.get(`user.${message.author.id}.afk.timestamp`)) <= 5) return
      data.set(`user.${message.author.id}.afk.reason`, '')
      data.set(`user.${message.author.id}.afk.timestamp`, '')
      const embed = new discord.MessageEmbed()
      .setTitle(`Welcome back!`)
      .setAuthor(message.author.username, message.author.avatarURL({dynamic:true}))
      .setDescription(`Your AFK status was removed.`)
      .setColor("GREEN")
      message.channel.send(embed).then(x => {x.delete({timeout:5000})})
    }
  }
}