const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    name: 'ara',
    command: new SlashCommandBuilder()
        .setName('ara')
        .setDescription('Bir numarayı ararsınız.')
        .addStringOption(option =>
            option.setName('seçim')
                .setDescription('Aranacak numarayı seçiniz.')
                .setRequired(true)
                .addChoices({ name: '112', value: '112' })
                .addChoices({ name: '155', value: '155' }))
        .setDMPermission(false),
    async run(client, interaction) {
        const secim = interaction.options.getString('seçim');

        let SuccessEmbed;
        switch (secim) {
            case '112':
                SuccessEmbed = new MessageEmbed()
                    .setColor('RED')
                    .setTitle('112 Arama')
                    .setDescription(`${interaction.member} **Dani Dani! Ambulans Geliyor** 🚑 (!)`)
                    .setFooter({ text: `${interaction.member.user.tag} tarafından istendi. Bu komut bir eğlence komutudur.`, iconURL: interaction.member.user.avatarURL({ dynamic: true }) });
                break;
            case '155':
                SuccessEmbed = new MessageEmbed()
                    .setColor('BLUE')
                    .setTitle('155 Arama')
                    .setDescription(`${interaction.member} **Dani Dani! Polis Geliyor** 👮🏽‍♂️ (!)`)
                    .setFooter({ text: `${interaction.member.user.tag} tarafından istendi. Bu komut bir eğlence komutudur.`, iconURL: interaction.member.user.avatarURL({ dynamic: true }) });
                break;
            default:
                SuccessEmbed = new MessageEmbed()
                    .setColor('ORANGE')
                    .setTitle('Geçersiz Numara')
                    .setDescription('Lütfen geçerli bir numara seçiniz (112 veya 155).')
                    .setFooter({ text: `${interaction.member.user.tag} tarafından istendi.`, iconURL: interaction.member.user.avatarURL({ dynamic: true }) });
                break;
        }

        interaction.reply({ embeds: [SuccessEmbed] });
    }
};
