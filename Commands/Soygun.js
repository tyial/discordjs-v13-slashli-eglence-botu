const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  name: 'soygun',
  command: new SlashCommandBuilder()
    .setName('soygun')
    .setDescription('Banka soygunu yaparsınız.')
    .setDMPermission(false),
  async run(client, interaction) {
    const SoygunMessages = [
      "Aynasızlar geliyor kaçın!",
      "854 Dolar Soydun! Bir ışık var.",
      "5 Dolar Soydun. Başarısız bir soygundu.",
      "63 Dolar Soydun. Başarılı gibi bir durmuyor!",
      "42 Dolar Soydun. Tam da rakamında soymuşsun birader.",
      "576 Dolar Soydun. Ortalama mı desek ne yapsak acaba?!",
      "349 Dolar Soydun. Hayalindeki ekipmanları zar zor alırsın.",
      "189 Dolar Soydun. Bu parayla uçak bileti bile alamayabilirsin.",
      "2.678 Dolar Soydun. Fena değil!",
      "4.125 Dolar Soydun. Oldukça iyi!",
      "3.299 Dolar Soydun. İyi bir soygundu.",
      "8.759 Dolar Soydun. Harika!",
      "23.987 Dolar Soydun. Büyük vurgun!",
      "35.214 Dolar Soydun. Mükemmel!",
      "246.890 Dolar Soydun. Muazzam!",
      "478.563 Dolar Soydun. İnanılmaz!",
      "619.432 Dolar Soydun. Devasa bir soygun!",
      "785.903 Dolar Soydun. Harikulade!",
      "912.847 Dolar Soydun. Efsanevi bir soygun!",
      "104 dolar soydun! Eh İşte.",
      "Helal la sana, 1 milyon dolar soydun!"
    ];

    const SuccessEmbed = new MessageEmbed()
      .setTitle(`**${SoygunMessages[Math.floor(Math.random() * SoygunMessages.length)]}**`)
      .setFooter({ text: `${interaction.member.user.tag} tarafından istendi. Bu komut bir eğlence komutudur.`, iconURL: interaction.member.user.avatarURL({ dynamic: true }) })
      .setColor("YELLOW");

    await interaction.reply({ embeds: [SuccessEmbed] });
  }
};