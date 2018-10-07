// Constante
const Discord = require('discord.js');
const fs = require('fs');
const bot = new Discord.Client();


bot.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'bienvenue');
    let memberavatar = member.user.avatarURL
    
    if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | Pseudo : ', `${member}`)
        .addField(':microphone2: | Bienvenue!', `Bienvenue sur le discord du Projet "Die Glocke", ${member}`)
        .addField(':id: | User :', "**[" + `${member.id}` + "]**")
        .addField(':family_mwgb: | Nous sommes à présent', `${member.guild.memberCount}`)
        .setFooter(`**${member.guild.name}**`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

bot.on('ready', () => {
    bot.user.setActivity("Garry's Mod");
    console.log('Je suis En Ligne.')
});

bot.on('message', msg => {
});

bot.login(process.env.TOKEN);
