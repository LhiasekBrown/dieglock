// Constante
const Discord = require('discord.js');
const fs = require('fs');
const bot = new Discord.Client();
const guildMember = msg.member;


bot.on('guildMemberAdd', member => {
    var role = member.guild.roles.find('name', 'Nouveau');
	let channel = member.guild.channels.find('name', 'bienvenue');
    let memberavatar = member.user.avatarURL
    
    member.addRole(role)
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
	let prefix = "!";
	
    if(message.content === prefix + "Reunion") {
        if(msg.member.roles.get(process.env.DIEGLOCKE)) {
            msg.reply("Vous n'avez pas accès à cette commande.");
            console.log('Une personne non-conviée a essayer : !reunion.')
        }
        else
        {
			msg.reply('Une réunion a été lancée dans le channel vocal : Réunion')
           
        }    
    }
});

bot.login(process.env.TOKEN);
