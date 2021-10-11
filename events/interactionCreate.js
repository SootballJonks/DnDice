//Synchronous functionality for this event

module.exports = {
  name: "interactionCreate",
  execute(interaction) {
    if (!interaction.channel) {
      console.error("Bot can't see this channel.")
      return;
    };
    console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
  }
}