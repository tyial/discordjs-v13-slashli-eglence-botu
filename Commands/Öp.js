const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  name: 'öp',
  command: new SlashCommandBuilder()
    .setName('öp')
    .setDescription('Bir kullanıcıyı öpersin.')
    .addUserOption(option =>
      option.setName('user')
        .setDescription('Kullanıcıyı seçin.')
        .setRequired(true))
    .setDMPermission(false),
  async run(client, interaction) {
    const User = interaction.options.getMember('user')

    const SuccessEmbed = new MessageEmbed()
      .setFooter({ text: `${interaction.member.user.tag} tarafından istendi. Bu komut bir eğlence komutudur.`, iconURL: interaction.member.user.avatarURL({ dynamic: true }) })
      .setDescription(`${interaction.member} kullanıcısı ${User} kullanıcısını öpüyor.`)
      .setImage(`https://c.tenor.com/fRIfg-otefcAAAAC/tenor.gif`);
    interaction.reply({ embeds: [SuccessEmbed] });
  }
};