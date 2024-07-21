const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    name: 'kapı-çal',
    command: new SlashCommandBuilder()
        .setName('kapı-çal')
        .setDescription('Polat kapıyı çalar.')
        .setDMPermission(false),
    async run(client, interaction) {
        const SuccessEmbed = new MessageEmbed()
            .setDescription(`${interaction.member} • Tak Tak Tak`)
            .setColor("BLACK")
            .setFooter({ text: `${interaction.member.user.tag} tarafından istendi. Bu komut bir eğlence komutudur.`, iconURL: interaction.member.user.avatarURL({ dynamic: true }) })
            .setImage(`https://media.tenor.com/xN9H6qF11NYAAAAM/polat-alemdar.gif`);
        interaction.reply({ embeds: [SuccessEmbed] })
    }
};