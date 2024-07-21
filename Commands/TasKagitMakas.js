const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    name: 'taş-kağıt-makas',
    command: new SlashCommandBuilder()
        .setName('taş-kağıt-makas')
        .setDescription('Birini seç.')
        .addStringOption(option =>
            option.setName('seçim')
                .setDescription('Seçiminizi yapın.')
                .setRequired(true)
                .addChoices({ name: 'Taş', value: 'Taş' })
                .addChoices({ name: 'Kağıt', value: 'Kağıt' })
                .addChoices({ name: 'Makas', value: 'Makas' }))
        .setDMPermission(false),
    async run(client, interaction) {
        const secim = interaction.options.getString('seçim');

        const rastgeleSecim = Math.floor(Math.random() * 3);
        let botSecim;
        let sonuc;

        switch (rastgeleSecim) {
            case 0:
                botSecim = 'Taş';
                break;
            case 1:
                botSecim = 'Kağıt';
                break;
            case 2:
                botSecim = 'Makas';
                break;
        }

        if (secim === botSecim) {
            sonuc = 'Berabere';
        } else if ((secim === 'Taş' && botSecim === 'Makas') || (secim === 'Kağıt' && botSecim === 'Taş') || (secim === 'Makas' && botSecim === 'Kağıt')) {
            sonuc = 'Kazandın';
        } else {
            sonuc = 'Kaybettin';
        }

        const embed = new MessageEmbed()
            .setAuthor({ name: `Taş Kağıt Makas oynadık, bayağı eğlenceliydi. Sonuç: ${sonuc}` })
            .setDescription(`**Benim seçimim**: ${botSecim} \r\n **Senin seçimin**: ${secim}`)
            .setFooter({ text: `${interaction.member.user.tag} tarafından istendi. Bu komut bir eğlence komutudur.`, iconURL: interaction.member.user.avatarURL({ dynamic: true }) })
            .setColor('RANDOM');

        interaction.reply({ embeds: [embed] });
    }
};
