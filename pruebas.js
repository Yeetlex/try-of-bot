const prefix = 'god.'; 

client.on('messageCreate', message => {
    if(message.content.startsWith(prefix + 'hola')) {
        message.reply('hijo de puta')
    }
});