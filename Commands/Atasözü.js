const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    name: 'atasözü',
    command: new SlashCommandBuilder()
        .setName('atasözü')
        .setDescription('Bot size rastgele bir atasözü gönderir.')
        .setDMPermission(false),
    async run(client, interaction) {

        const Atasözleri = [
            "Damlaya damlaya göl olur.",
            "Gülme komşuna, gelir başına.",
            "Taşıma su ile değirmen dönmez.",
            "Ayağını yorganına göre uzat.",
            "İşleyen demir ışıldar.",
            "Bir elin nesi var, iki elin sesi var.",
            "Güvenme varlığa, düşersin darlığa.",
            "Sakla samanı, gelir zamanı.",
            "Tatlı dil yılanı deliğinden çıkarır.",
            "Ağaç yaşken eğilir."
        ];

        const SuccessEmbed = new MessageEmbed()
            .setDescription(`**${Atasözleri[Math.floor(Math.random() * Atasözleri.length)]}**`)
            .setColor("RANDOM")
            .setFooter({ text: `${interaction.member.user.tag} tarafından istendi. Bu komut bir eğlence komutudur.`, iconURL: interaction.member.user.avatarURL({ dynamic: true }) });

        await interaction.reply({ embeds: [SuccessEmbed] });
    }
};