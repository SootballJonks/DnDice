const { MessageActionRow, MessageSelectMenu } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const { diceRoll } = require("../DICE_LOGIC.js");

/* "dice": Opens a discord bot menu where you can select the parameters for your dice roll. */

module.exports = {
  data: new SlashCommandBuilder()
    .setName("roll")
    .setDescription(` Example: "/roll 3d6" , "/roll 1d10", etc.`)
    .addStringOption(option =>
      option
        .setName("qty")
        .setDescription("How many dice? (numbers only)")
        .setRequired(true))
    .addStringOption(option =>
      option
        .setName("sides")
        .setDescription("How many sides? (numbers only)")
        .setRequired(true))
    .addStringOption(option =>
      option
        .setName("extra")
        .setDescription("Do your dice explode? (Click an option above^^^)")
        .setRequired(true)
        .addChoice('Yes! Make em explode!', 'true')
        .addChoice('No! Just normal dice!', 'false'))
    ,
    

  async execute(interaction) {
    if (!interaction.channel) {
      return;
    }

    let options = interaction.options._hoistedOptions

    interaction.reply(diceRoll(options));
  },

};