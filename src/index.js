const { EmbedBuilder, ActionRowBuilder, ButtonStyle, StingSelectMenuBuilder, Events, ButtonBuilder, editEmbed, Collection } = require("discord.js");
const MusicBot = require("./structures/Client");
const client = new MusicBot();
const GiveawayManager = require("./handlers/GiveawayManager");
client.connect()
const util = require('./handlers/util');
const config = require('./config');

client.util = new util(client);
client.giveawaysManager = new GiveawayManager(client);
client.emoji = {
  'tick': '<1239384584315994153>',
  'cross': '<1239384581921050726>',
  'dot': '<a1241064280124817529>',
  'giveaway': '<1239384570336514132>',
  'music': '<1239384630621245562>',
  'volumehigh': '<1239384534542450688>',
  'play': '<1239384816990949437>',
  'stop': '<1239384607137337375>',
  'skip': '<1239384601470963822>',
  'resume': '<1239384607137337375>'
};


client.userSettings = new Collection();
client.color = 'ff006a'





module.exports = client; 

client.on(Events.InteractionCreate, async interaction => {

	if (!interaction.isStringSelectMenu()) return;
  
process.on('unhandledRejection', (reason, p) => {
    console.log(reason, p);
});

process.on('uncaughtException', (err, origin) => {
    console.log(err, origin);
});

process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.log(err, origin);
});
    
    let options = interaction.values;
    let funny = options[0]

if(funny === 'seven') {
const embed7 = new EmbedBuilder()
  .setColor(client.color)
  .setFooter({ text: `Requested by ` + interaction.member.user.username , iconURL: interaction.member.user.displayAvatarURL({ dynamic: true})})
    .setAuthor({name: `Ather's Help Panel`,iconURL: client.user.displayAvatarURL()})
.setTitle("**__Image__**")
  .setDescription(`\n\n\`achi\`\n\n`)
  interaction.update({embeds: [embed7], ephemeral: true})
  return
}
if(funny === 'sixth') {
   const embed6 = new EmbedBuilder()
    .setAuthor({name:`Ather's Help Panel`,
      iconURL:client.user.displayAvatarURL()})
    .setTitle("**__Moderation__**")
      .setDescription(`\n\n\`lock, unlock, lockall, unlockall, hide, unhide, hideall, unhideall, ban, hackban, unban, unbanall, kick, mute, unmute, purge, nuke, purgebots\`\n\n`)
  .setThumbnail(client.user.displayAvatarURL())
    .setColor(client.color)
    .setTimestamp()
    .setFooter({ text: `Requested by ` + interaction.member.user.username , iconURL: interaction.member.user.displayAvatarURL({ dynamic: true})})
  
        interaction.update({ embeds: [embed6], ephemeral: true })
        return
}

if(funny === 'fifth') {
  const embed2 = new EmbedBuilder()
    .setAuthor({name:`Ather's Help Panel`,
      iconURL:client.user.displayAvatarURL()})
.setDescription(`<a:x_dot:1241064280124817529> Prefix on this server : \`${client.config.prefix}\`\n<a:x_dot:1241064280124817529> Type **\`${client.config.prefix}\`help** for more info\n<a:x_dot:1241064280124817529> Total commands: 53\n**[Add me](${config.links.invite}) | [Support](${config.links.support})**`)
   .addFields([
     {name : `**__Main Categories__**` , value : `**<1239384669175152691> Moderation\n<1239384932019867689> Information\n<1239384630621245562> Music\n<1239384528385216523> Fun\n<1239384545279737888> Voice\n<1239384634958155777> Settings\n\n**__Links__**\n [Support](https://discord.com/invite/4t2r9WB6qZ) | [Invite](${client.config.links.invite}) ** `}
])
.setThumbnail(client.user.displayAvatarURL())
    .setImage("")
    .setColor(client.color)
    .setFooter({ text: `Requested by ` + interaction.member.user.username , iconURL: interaction.member.user.displayAvatarURL({ dynamic: true})})
  
        interaction.update({ embeds: [embed2], ephemeral: true })
        return
}

if(funny === 'first') {
  const embed4 = new EmbedBuilder()
    .setAuthor({name:`Ather's Help Panel`,
      iconURL:client.user.displayAvatarURL()})
    .setTitle("**__Information__**")
      .setDescription(`\n\n\`about, invite, ping, node, stats, help, avatar, banner, servericon, serverbanner, userinfo, serverinfo, uptime, membercount, bug, announce, embedsay, boostcount, dm\`\n\n`)
  .setThumbnail(client.user.displayAvatarURL())
    .setColor(client.color)
    .setTimestamp()
    .setFooter({ text: `Requested by ` + interaction.member.user.username , iconURL: interaction.member.user.displayAvatarURL({ dynamic: true})})
  
        interaction.update({ embeds: [embed4], ephemeral: true })
        return
}
if(funny === 'second') {
  const embed5 = new EmbedBuilder()
   
  .setAuthor({name:`Ather's Help Panel`,iconURL:client.user.displayAvatarURL()})
    .setTitle("**__Music__**")
    .setDescription(`\n\n\`play, join, leave, loop, Autoplay, pause, lyrics, nowplaying, previous, queue, resume, skip, remove, seek, volume, search, shuffle, grab, skipto, clearqueue, 247, filters, p_create, p_delete, p_savecurrent, p_savequeue, p_removetrack, p_load, p_info, p_list\`\n\n`)
    
    .setThumbnail(client.user.displayAvatarURL())
    .setColor(client.color)
    .setTimestamp()
    .setFooter({ text: `Requested by ` + interaction.member.username , iconURL: interaction.member.user.displayAvatarURL({ dynamic: true})});
  
 interaction.update({ embeds: [embed5], ephemeral: true })
        return
}
  if(funny === 'eight') {
const embed18 = new EmbedBuilder()
  .setColor(client.color)
  .setFooter({ text: `Requested by ` + interaction.member.user.username, iconURL: interaction.member.user.displayAvatarURL({ dynamic: true})})
    .setAuthor({name:`Ather's Help Panel`,
      iconURL:client.user.displayAvatarURL()})
  
.setTitle("**__Fun__**")
  .setDescription(`\n\n\`hack, achi, ascii, math, howgay, howdumb\`\n\n`)
  interaction.update({embeds: [embed18], ephemeral: true})
  return
  }
  if(funny === 'fourth') {
  const embed6 = new EmbedBuilder()
    .setAuthor({name:`Ather's Help Panel`,
      iconURL:client.user.displayAvatarURL()})
    .setTitle("**__Settings__**")
      .setDescription(`\n\n\`prefix, serverlist\`\n\n`)
  .setThumbnail(client.user.displayAvatarURL())
    .setColor(client.color)
    .setTimestamp()
    .setFooter({ text: `Requested by ` + interaction.member.user.username , iconURL: interaction.member.user.displayAvatarURL({ dynamic: true})})
  
        interaction.update({ embeds: [embed6], ephemeral: true })
        return
  }

   if(funny === 'nineth') {
  const embedn = new EmbedBuilder()
    .setAuthor({name:`Ather's Help Panel`,
      iconURL:client.user.displayAvatarURL()})
    .setTitle("**__Custom Roles__**")
      .setDescription(`\n\n\`rsetup, vip, guest, friend, official, girl, rgirl, rvip, rofficial, rguest, rfriend\`\n\n`)
  .setThumbnail(client.user.displayAvatarURL())
    .setColor(client.color)
    .setTimestamp()
    .setFooter({ text: `Requested by ` + interaction.member.user.username , iconURL: interaction.member.user.displayAvatarURL({ dynamic: true})})
  
        interaction.update({ embeds: [embedn], ephemeral: true })
        return
   }
  if(funny === 'tenth') {
  const embed6 = new EmbedBuilder()
    .setAuthor({name:`Ather's Help Panel`,
      iconURL:client.user.displayAvatarURL()})
    .setTitle("**__Giveaway__**")
      .setDescription(`\n\n\`gstart, gend, greroll, glist\`\n\n`)
  .setThumbnail(client.user.displayAvatarURL())
    .setColor(client.color)
    .setTimestamp()
    .setFooter({ text: `Requested by ` + interaction.member.user.username , iconURL: interaction.member.user.displayAvatarURL({ dynamic: true})})
  
        interaction.update({ embeds: [embed6], ephemeral: true })
        return
  }

  if(funny === 'eleventh') {
  const embed6 = new EmbedBuilder()
    .setAuthor({name:`Ather's Help Panel`,
      iconURL:client.user.displayAvatarURL()})
    .setTitle("**Voice**")
      .setDescription(`\n\n\`vcmute, vcunmute, vcdeafen, vcundeafen, vckick, vclist, vcmove\`\n\n`)
  .setThumbnail(client.user.displayAvatarURL())
    .setColor(client.color)
    .setTimestamp()
    .setFooter({ text: `Requested by ` + interaction.member.user.username , iconURL: interaction.member.user.displayAvatarURL({ dynamic: true})})
  
        interaction.update({ embeds: [embed6], ephemeral: true })
        return
  }
  if(funny === 'owner') {
    const embed6 = new EmbedBuilder()
      .setAuthor({name:`Ather's Help Panel`,
        iconURL:client.user.displayAvatarURL()})
      .setTitle("**__Owner__**")
        .setDescription(`\n\n\`eval, leaveserver, noprefix, reload, say, serverlist\`\n\n`)
    .setThumbnail(client.user.displayAvatarURL())
      .setColor(client.color)
      .setTimestamp()
      .setFooter({ text: `Requested by ` + interaction.member.user.username , iconURL: interaction.member.user.displayAvatarURL({ dynamic: true})})

          interaction.update({ embeds: [embed6], ephemeral: true })
          return
      }
  
module.exports = client;
})