const { MessageActionRow, MessageSelectMenu } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

/* "dice": Opens a discord bot menu where you can select the parameters for your dice roll. */

module.exports = {
  data: new SlashCommandBuilder()
    .setName("roll")
    .setDescription(` Example: "/roll 3d6" , "/roll 1d10", etc.`)
    .addStringOption(option =>
      option
        .setName("dicetype")
        .setDescription("How many dice & how many faces? Eg. 3d10, 4d6 ...")
        .setRequired(true)),
    

  async execute(interaction) {
    if (!interaction.channel) {
      return;
    }

    const selectMenu = new MessageActionRow()
      .addComponents(new MessageSelectMenu()
      .setCustomId("explDice")
      .setPlaceholder("Do your dice explode?")
      .setMinValues(1)
      .setMaxValues(1)
      .addOptions([
        {
        label: "Yes! Make em explode!",
        value: "true"
        },
        {
          label: "No! Just normal dice!",
          value: "false"
        }]));


    console.log(interaction.options._hoistedOptions[0])


    interaction.reply({
      content: `Make a selection:`,
      components: [selectMenu]
    })
  },

};