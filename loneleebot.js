const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });


const swear_words = ["Lee Ler!", "Lee Nyi Gay", "ညီဂေးလေး", "Lee MIT"]

bot.on('message', (msg) => {
    const random = Math.floor(Math.random() * 4);
    //   console.log(msg.chat.id); // ← this is your chat_id
    const chatId = msg.chat.id;

    swear_name = 'ဂေး'+msg.chat.username
    swear_back = 'လီးကို'+msg.text+ 'ပါလား'

    bot.sendMessage(chatId, swear_name)
    bot.sendMessage(chatId, swear_back)
    bot.sendMessage(chatId, swear_words[random])
    // bot.sendPhoto(chatId, 'images/middle-finger.jpg', {
    //       caption: swear_words[random]
    //     });
}
)


