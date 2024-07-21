const { MessageEmbed } = require("discord.js");
const request = require("request");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    name: 'tweet-at',
    command: new SlashCommandBuilder()
        .setName('tweet-at')
        .setDescription('Tweet atarsınız.')
        .addStringOption(option =>
            option.setName('tweet-içerik-ne')
                .setDescription('Tweet içeriği nedir?')
                .setRequired(true))
        .setDMPermission(false),
    async run(client, interaction) {
        const text = interaction.options.getString("tweet-içerik-ne");

        await interaction.deferReply({ ephemeral: false });

        request(`https://nekobot.xyz/api/imagegen?type=tweet&text=${encodeURI(text)}&username=${encodeURI(interaction.member.user.username)}&image=${encodeURI(interaction.member.user.avatarURL())}`, function (error, response, body) {
            const ErrorEmbed = new MessageEmbed()
                .setColor("RED")
                .setTitle("**»** Bir Hata Oluştu!")
                .setDescription("**•** Daha sonra tekrar deneyiniz.");

            const SuccessEmbed = new MessageEmbed()
                .setAuthor({ name: `${interaction.user.username} • Tweet` })
                .setFooter({ text: `${interaction.member.user.tag} tarafından istendi. Bu komut bir eğlence komutudur.`, iconURL: interaction.member.user.avatarURL({ dynamic: true }) })
                .setImage(JSON.parse(body).message);

            if (error || !body || !JSON.parse(body).success) {
                return interaction.editReply({ ephemeral: true, embeds: [ErrorEmbed] });
            }

            interaction.editReply({ ephemeral: false, embeds: [SuccessEmbed] });
        });
    }
};
