const discord = require('discord.js'), fs = require('fs'), enmap = require('enmap')
module.exports = {
  name:"messageReactionAdd",
  execute(client, reaction, user) {
    function deniedEmbed(err) {
      const deniedEmbed = new discord.MessageEmbed()
      .setTitle('Error')
      .setDescription(err)
      .setThumbnail('https://images-ext-1.discordapp.net/external/9yiAQ7ZAI3Rw8ai2p1uGMsaBIQ1roOA4K-ZrGbd0P_8/https/cdn1.iconfinder.com/data/icons/web-essentials-circle-style/48/delete-512.png?width=461&height=461')
      .setColor('RED')
      .setTimestamp();
      return deniedEmbed
    }
    const data = new enmap({name:'botdata', dataDir:'./data'})
    if (reaction.message.content.includes("Help Menu ") && reaction.message.author == client.user && user != client.user) {
      reaction.users.remove(user.id)
      if (user.id != reaction.message.content.slice('Help Menu '.length)) return user.send(deniedEmbed('You didn\'t instate this command and hence cannot add reactions'))
      const helpEmbed = new discord.MessageEmbed()
      .setTitle('Help Menu')
      .setDescription('Take a look through all categories!')
      .setColor('BLUE')
      .addField('1️⃣', 'Miscellaneous', true)
      .addField('2️⃣', 'Moderation', true)
      .addField('3️⃣', 'Configuration', true)
      .addField('4️⃣', 'NSFW', true)
      .addField('5️⃣', 'Fun', true)
      .addField('6️⃣', 'Chat', true)
      .setFooter('Aquacious',`https://github.com/llsc12/Aquacious/raw/main/aicon.gif`)

      if (!data.get(`guild.${reaction.message.guild.id}.prefix`)) { //prefix
        var prefix = '!'
      } else {
        var prefix = data.get(`guild.${reaction.message.guild.id}.prefix`)
      }
      /*
      const commandFolders = fs.readdirSync('./commands')
      for (const folder of commandFolders) {
        if (folder.endsWith('.js')) {
          console.log(chalk.red(`File (${folder}) not in subdirectory, please move it. File has been ignored.`))
          return
        }
        const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
          const command = require(`./commands/${folder}/${file}`);
          client.commands.set(command.name, command);
          console.log(chalk.hex('#808080')(`Loaded command `)+chalk.hex('#3c850c')(`${file} - ${require(`./commands/${folder}/${file}`).name}`))
        }
      I plan to make this shit more dynamic bc why not
      }
      let categories = new discord.Collection()
      const categoryFolders = fs.readdirSync('./commands/')

      for (const folder of categoryFolders) {
        const lowerDirectory = fs.readdirSync(`./commands/${folder}/`)
        for (const file of a) {}
      }
      */
      const {commands} = client;
      let misc = new Array()
      commands.map(command => command).forEach(cmd => {
        if (cmd.category == 'Miscellaneous') {
          if (cmd.hidden) return
          if (misc[0]) return misc[misc.length] = cmd
          else return misc[0] = cmd
        } 
      })
      let mod = new Array()
      commands.map(command => command).forEach(cmd => {
        if (cmd.category == 'Moderation') {
          if (cmd.hidden) return
          if (mod[0]) return mod[mod.length] = cmd
          else return mod[0] = cmd
        } 
      })
      let conf = new Array()
      commands.map(command => command).forEach(cmd => {
        if (cmd.hidden) return
        if (cmd.category == 'Configuration') {
          if (conf[0]) return conf[conf.length] = cmd
          else return conf[0] = cmd
        } 
      })
      let nsfw = new Array()
      commands.map(command => command).forEach(cmd => {
        if (cmd.hidden) return
        if (cmd.category == 'NSFW') {
          if (nsfw[0]) return nsfw[nsfw.length] = cmd
          else return nsfw[0] = cmd
        } 
      })
      let fun = new Array()
      commands.map(command => command).forEach(cmd => {
        if (cmd.hidden) return
        if (cmd.category == 'Fun') {
          if (fun[0]) return fun[fun.length] = cmd
          else return fun[0] = cmd
        } 
      })
      let chat = new Array()
      commands.map(command => command).forEach(cmd => {
        if (cmd.hidden) return
        if (cmd.category == 'Chat') {
          if (chat[0]) return chat[chat.length] = cmd
          else return chat[0] = cmd
        } 
      })
      let miscformatted = new Array()
      misc.forEach(cmd => {
          if (miscformatted[0]) return miscformatted[miscformatted.length] = `\n**${prefix+cmd.name}**\n${cmd.description}`
          else return miscformatted[0] = `**${prefix+cmd.name}**\n${cmd.description}`
      })
      let modformatted = new Array()
      mod.forEach(cmd => {
          if (modformatted[0]) return modformatted[modformatted.length] = `\n**${prefix+cmd.name}**\n${cmd.description}`
          else return modformatted[0] = `**${prefix+cmd.name}**\n${cmd.description}`
      })
      let confformatted = new Array()
      conf.forEach(cmd => {
          if (confformatted[0]) return confformatted[confformatted.length] = `\n**${prefix+cmd.name}**\n${cmd.description}`
          else return confformatted[0] = `**${prefix+cmd.name}**\n${cmd.description}`
      })
      let nsfwformatted = new Array()
      nsfw.forEach(cmd => {
          if (nsfwformatted[0]) return nsfwformatted[nsfwformatted.length] = `\n**${prefix+cmd.name}**\n${cmd.description}`
          else return nsfwformatted[0] = `**${prefix+cmd.name}**\n${cmd.description}`
      })
      let funformatted = new Array()
      fun.forEach(cmd => {
          if (funformatted[0]) return funformatted[funformatted.length] = `\n**${prefix+cmd.name}**\n${cmd.description}`
          else return funformatted[0] = `**${prefix+cmd.name}**\n${cmd.description}`
      })
      let chatformatted = new Array()
      chat.forEach(cmd => {
          if (chatformatted[0]) return chatformatted[chatformatted.length] = `\n**${prefix+cmd.name}**\n${cmd.description}`
          else return chatformatted[0] = `**${prefix+cmd.name}**\n${cmd.description}`
      })

      let page = ''
      if (reaction.emoji.name == '⏹') page = 'delete'
      if (reaction.emoji.name == '🏠') page = 'home'
      if (reaction.emoji.name == '1️⃣') page = 'Miscellaneous'
      if (reaction.emoji.name == '2️⃣') page = 'Moderation'
      if (reaction.emoji.name == '3️⃣') page = 'Configuration'
      if (reaction.emoji.name == '4️⃣') page = 'NSFW'
      if (reaction.emoji.name == '5️⃣') page = 'Fun'
      if (reaction.emoji.name == '6️⃣') page = 'Chat'
      if (page == '') return
      if (page == 'delete') return reaction.message.delete()
      if (page == 'home') var embed = helpEmbed
      if (page == 'Miscellaneous') var embed = new discord.MessageEmbed().setTitle(page+' Commands').setDescription(miscformatted.join('')).setColor('YELLOW')
      if (page == 'Moderation') var embed = new discord.MessageEmbed().setTitle(page+' Commands').setDescription(modformatted.join('')).setColor('YELLOW')
      if (page == 'Configuration') var embed = new discord.MessageEmbed().setTitle(page+' Commands').setDescription(confformatted.join('')).setColor('YELLOW')
      if (page == 'NSFW') var embed = new discord.MessageEmbed().setTitle(page+' Commands').setDescription(nsfwformatted.join('')).setColor('YELLOW')
      if (page == 'Fun') var embed = new discord.MessageEmbed().setTitle(page+' Commands').setDescription(funformatted.join('')).setColor('YELLOW')
      if (page == 'Chat') var embed = new discord.MessageEmbed().setTitle(page+' Commands').setDescription(chatformatted.join('')).setColor('YELLOW')
      reaction.message.edit(embed)

    }
  }
}