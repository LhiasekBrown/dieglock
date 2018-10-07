// Constante
const Discord = require('discord.js');
const fs = require('fs');
const bot = new Discord.Client();

bot.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'bienvenue');
    let memberavatar = member.user.avatarURL
    
    guildMember.addroles([process.env.USER])
    console.log(`L'utilisateur` + member.user.username + `a rejoint le projet Die Glocke.`)

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
    //Constante en lien avec les messages
    let schannel = member.guild.channels.find('name', 'annonce');
    const guildMember = message.member;

    if(message.content === prefix + "Reunion") {
        if(msg.member.roles.get(process.env.DIEGLOCKE)) {
            msg.reply("Vous n'avez pas accès à cette commande.");
            console.log('Une personne non-conviée a essayer : !reunion.')
        }
        else
        {
            if(!schannel) return;
                let sembed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .setThumbnail(bot.avatarURL)
                .addField(message.author.username + "démarre une réunion, qui débutera dans 10 minutes.")
                .addField('Rejoignez le canal prévu à cet effet, ou prévenez de votre absence.')
                .setFooter(`**${member.guild.name}**`)
                .setTimestamp()
                
                channel.sendEmbed(sembed)
        }    
    }
});

bot.login(process.env.TOKEN);
