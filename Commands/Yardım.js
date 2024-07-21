const { MessageEmbed } = require("discord.js")
const { SlashCommandBuilder } = require("@discordjs/builders")
module.exports = {
  name: 'yardım',
  command: new SlashCommandBuilder()
    .setName('yardım')
    .setDescription('Yardım menüsünü gösterir.')
    .setDMPermission(false),

  async run(client, interaction) {

    interaction.reply({
      embeds: [new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Yardım')
        .setDescription('Komutlar hakkında bilgi alın.')
        .addFields(
          {
            name: 'Komutlar', value: `
        /ara → Seçilen numarayı arar.
        /aşk-ölçer → Seçilen kullanıcı ile aranızdaki aşk derecesini ölçer.
        /atasözü → Rastgele bir atasözü gönderir.
        /emoji-yazı → Yazılan yazıyı emojiye dönüştürür.
        /kapı-çal → Polat kapıyı çalar.
        /öp → Seçtiğin kişiyi öpersin.
        /soygun → Soygun yaparsınız.
        /taş-kağıt-makas → Bot ile Taş Kağıt Makas oyununu oynarsınız.
        /tweet-at → Tweet atarsınız.
        `, inline: true
          }
        )]
    })

  }
}