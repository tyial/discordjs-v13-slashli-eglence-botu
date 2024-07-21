const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    name: 'aşk-ölçer',
    command: new SlashCommandBuilder()
        .setName('aşk-ölçer')
        .setDescription('Bir kullanıcıyla olan aşk seviyenizi ölçer.')
        .addUserOption(option =>
            option.setName('kullanıcı')
                .setDescription('Kullanıcıyı seçin.')
                .setRequired(true))
        .setDMPermission(false),
    async run(client, interaction) {
        const userId = interaction.options.getUser("kullanıcı").id;
        const user = await interaction.guild.members.fetch(userId)
        const UserTag = user.user.tag

        if (userId === client.user.id) {
            return interaction.reply({ content: "Bana aşık mı oldun? Kimseye aşık değilim.", ephemeral: true })
        }
        if (user.user.bot) {
            return interaction.reply({ content: "Botlarla olan aşk seviyeniz hesaplanamaz!", ephemeral: true });
        }

        const Seviyeler = [
            "10% - Sizden arkadaş bile olmaz. 😞",
            "20% - En büyük aşklar kavgayla başlar. 💢",
            "30% - Belki ileride. 🤔",
            "40% - Deneyebilirsiniz! 😅",
            "50% - Yavaş yavaş ilerleme kaydediyorsunuz. 🙂",
            "60% - Arada bir kıvılcım var. 🔥",
            "70% - İdare eder. 👍",
            "80% - Sevgili olabilir. ❤️",
            "90% - Aşka doğru gidiyor. 💖",
            "100% - Aşık. 💘"
        ];

        const SuccessEmbed = new MessageEmbed()
            .setAuthor({ name: interaction.member.user.tag + " ile " + UserTag + " kullanıcısıyla aşk seviyesi aşağıdaki gibidir.", iconURL: interaction.member.user.avatarURL() })
            .setDescription(`**\ ${Seviyeler[Math.floor(Math.random() * Seviyeler.length)]} \**💞\n\nÇıkan aşk ölçer sonucu rastgele olup, gerçeği yansıtmamaktadır.\nBu bir eğlence komutudur.`)
            .setFooter({ text: `${interaction.member.user.tag} tarafından istendi. Bu komut bir eğlence komutudur.`, iconURL: interaction.member.user.avatarURL({ dynamic: true }) })
            .setColor("GREEN");
        interaction.reply({ embeds: [SuccessEmbed] });
    }
};