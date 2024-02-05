const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('zebi')
		.setDescription('ygoullek l ha9i9a'),
	async execute(interaction) {
		await interaction.reply('Zebi ba3d');
	},
};