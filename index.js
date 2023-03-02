const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [ 'AutoModerationConfiguration','AutoModerationExecution','DirectMessageReactions','DirectMessageTyping','DirectMessages','GuildBans','GuildEmojisAndStickers','GuildIntegrations','GuildInvites','GuildMembers','GuildMessageReactions','GuildMessageTyping','GuildMessages','GuildModeration','GuildPresences','GuildScheduledEvents','GuildVoiceStates','GuildWebhooks','Guilds','MessageContent' ]
});
const CONFIG = require('./config.json');
const prefix = 'god.'; 

client.on('messageCreate', message => {
    if(message.content.startsWith('hol')) {
        message.reply('pa ti mi cola ' + message.author.username)
    }
});

client.on('messageCreate', message => {
    if(message.content.startsWith('buenas')) {
        message.reply('buena la que te comes ' + message.author.username)
    }
});

client.on('messageCreate', message => {
    if(message.content.startsWith('adio')) {
        message.reply('vuelve pronto ' + message.author.username + ' hijx de la gran puta')
    }
});

client.on('messageCreate', message => {
    if(message.content.startsWith('cha')) {
        message.reply('vuelve pronto ' + message.author.username + ' hijx de la gran puta')
    }
});




client.login(CONFIG.token).then(() => console.log(`${client.user.username} se ha conectado.`));




