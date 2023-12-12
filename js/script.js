const { DateTime } = luxon
const { createApp } = Vue

createApp({
  data() {
    return {
      user: {
        name: 'Michelle',
        avatar: './img/avatar_io.jpg'
      },
      contacts: [
        {
          name: 'Michele',
          avatar: './img/avatar_1.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Hai portato a spasso il cane?',
              status: 'sent',
              msgMenu: false,
              deletedMsg: false,
              removedMsg: false,
              msgInfo: false
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Ricordati di stendere i panni',
              status: 'sent',
              msgMenu: false,
              deletedMsg: false,
              removedMsg: false,
              msgInfo: false
            },
            {
              date: '10/01/2020 16:15:22',
              message: 'Tutto fatto!',
              status: 'received',
              msgMenu: false,
              deletedMsg: false,
              removedMsg: false,
              msgInfo: false
            }
          ],
        },
        {
          name: 'Fabio',
          avatar: '',
          visible: true,
          messages: [
            {
              date: '20/03/2020 16:30:00',
              message: 'Ciao come stai?',
              status: 'sent',
              msgMenu: false,
              deletedMsg: false,
              removedMsg: false,
              msgInfo: false
            },
            {
              date: '20/03/2020 16:30:55',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received',
              msgMenu: false,
              deletedMsg: false,
              removedMsg: false,
              msgInfo: false
            },
            {
              date: '20/03/2020 16:35:00',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent',
              msgMenu: false,
              deletedMsg: false,
              removedMsg: false,
              msgInfo: false
            }
          ],
        },
        {
          name: 'Samuele',
          avatar: './img/avatar_3.jpg',
          visible: true,
          messages: [
            {
              date: '28/03/2020 10:10:40',
              message: 'La Marianna va in campagna',
              status: 'received',
              msgMenu: false,
              deletedMsg: false,
              removedMsg: false,
              msgInfo: false
            },
            {
              date: '28/03/2020 10:20:10',
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent',
              msgMenu: false,
              deletedMsg: false,
              removedMsg: false,
              msgInfo: false
            },
            {
              date: '28/03/2020 16:15:22',
              message: 'Ah scusa!',
              status: 'received',
              msgMenu: false,
              deletedMsg: false,
              removedMsg: false,
              msgInfo: false
            }
          ],
        },
        {
          name: 'Alessandro B.',
          avatar: './img/avatar_4.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent',
              msgMenu: false,
              deletedMsg: false,
              removedMsg: false,
              msgInfo: false
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received',
              msgMenu: false,
              deletedMsg: false,
              removedMsg: false,
              msgInfo: false
            }
          ],
        },
        {
          name: 'Alessandro L.',
          avatar: './img/avatar_5.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ricordati di chiamare la nonna',
              status: 'sent',
              msgMenu: false,
              deletedMsg: false,
              removedMsg: false,
              msgInfo: false
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Va bene, stasera la sento',
              status: 'received',
              msgMenu: false,
              deletedMsg: false,
              removedMsg: false,
              msgInfo: false
            }
          ],
        },
        {
          name: 'Claudia',
          avatar: './img/avatar_6.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao Claudia, hai novità?',
              status: 'sent',
              msgMenu: false,
              deletedMsg: false,
              removedMsg: false,
              msgInfo: false
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Non ancora',
              status: 'received',
              msgMenu: false,
              deletedMsg: false,
              removedMsg: false,
              msgInfo: false
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'Nessuna nuova, buona nuova',
              status: 'sent',
              msgMenu: false,
              deletedMsg: false,
              removedMsg: false,
              msgInfo: false
            }
          ],
        },
        {
          name: 'Federico',
          avatar: './img/avatar_7.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Fai gli auguri a Martina che è il suo compleanno!',
              status: 'sent',
              msgMenu: false,
              deletedMsg: false,
              removedMsg: false,
              msgInfo: false
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Grazie per avermelo ricordato, le scrivo subito!',
              status: 'received',
              msgMenu: false,
              deletedMsg: false,
              removedMsg: false,
              msgInfo: false
            }
          ],
        },
        {
          name: 'Davide',
          avatar: './img/avatar_8.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received',
              msgMenu: false,
              deletedMsg: false,
              removedMsg: false,
              msgInfo: false
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
              status: 'sent',
              msgMenu: false,
              deletedMsg: false,
              removedMsg: false,
              msgInfo: false
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'OK!!',
              status: 'received',
              msgMenu: false,
              deletedMsg: false,
              removedMsg: false,
              msgInfo: false
            }
          ],
        }
      ],
      activeIndex: 0,
      selectedMsg: {},
      newMessage: '',
      searchingChat: '',
      alertOn: false,
      emojiMenu: false,
      emojiIndex: 0,
      emojiArray: [
        {
          emojiSection: '😎',
          emojis: [
            { character: '😄' }, { character: '😁' }, { character: '😆' },
            { character: '😅' }, { character: '😂' }, { character: '🙂' }, { character: '🙃' }, { character: '😉' },
            { character: '😊' }, { character: '😋' }, { character: '😎' }, { character: '😍' }, { character: '😘' },
            { character: '😙' }, { character: '😚' }, { character: '🤗' },
            { character: '🤔' }, { character: '😐' }, { character: '😑' }, { character: '😶' }, { character: '😏' }
          ]
        },
        {
          emojiSection: '🐵',
          emojis: [
            { character: '🐶' }, { character: '🐱' }, { character: '🐭' }, { character: '🐹' }, { character: '🐰' },
            { character: '🦊' }, { character: '🐻' }, { character: '🐼' }, { character: '🐨' }, { character: '🐯' },
            { character: '🦁' }, { character: '🐮' }, { character: '🐷' }, { character: '🐸' }, { character: '🐵' },
            { character: '🐔' }, { character: '🐧' }, { character: '🐦' }, { character: '🐤' }, { character: '🦆' }
          ]
        },
        {
          emojiSection: '🍒',
          emojis: [
            { character: '🍏' }, { character: '🍎' }, { character: '🍐' }, { character: '🍊' }, { character: '🍋' },
            { character: '🍌' }, { character: '🍉' }, { character: '🍇' }, { character: '🍓' }, { character: '🍈' },
            { character: '🍒' }, { character: '🍑' }, { character: '🍍' }, { character: '🥭' }, { character: '🥥' },
            { character: '🥝' }, { character: '🍅' }, { character: '🥑' }, { character: '🥦' }, { character: '🥒' }
          ]
        },
        {
          emojiSection: '🎯',
          emojis: [
            { character: '⚽' }, { character: '🏀' }, { character: '🏈' }, { character: '⚾' }, { character: '🎾' },
            { character: '🏐' }, { character: '🏉' }, { character: '🎱' }, { character: '🏓' }, { character: '🏸' },
            { character: '🥅' }, { character: '🎳' }, { character: '🎮' }, { character: '🎯' }, { character: '🎰' },
            { character: '🎲' }, { character: '🧩' }, { character: '♟️' }, { character: '🎻' }, { character: '🎺' }
          ]
        },
        {
          emojiSection: '🛵',
          emojis: [
            { character: '🚗' }, { character: '🚕' }, { character: '🚙' }, { character: '🚌' }, { character: '🚎' },
            { character: '🏎️' }, { character: '🚓' }, { character: '🚑' }, { character: '🚒' }, { character: '🚐' },
            { character: '🛻' }, { character: '🚚' }, { character: '🚛' }, { character: '🚜' }, { character: '🏍️' },
            { character: '🛵' }, { character: '🚲' }, { character: '🛴' }, { character: '🚨' }, { character: '🚔' }
          ]
        },
        {
          emojiSection: '🕹️',
          emojis: [
            { character: '⌚' }, { character: '📱' }, { character: '💻' }, { character: '🖥️' }, { character: '🖨️' },
            { character: '🖱️' }, { character: '🖲️' }, { character: '🕹️' }, { character: '🗜️' }, { character: '💽' },
            { character: '💾' }, { character: '💿' }, { character: '📀' }, { character: '📷' }, { character: '📸' },
            { character: '🎥' }, { character: '📹' }, { character: '🎬' }, { character: '📺' }, { character: '📻' }
          ]
        },
        {
          emojiSection: '❤️',
          emojis: [
            { character: '❤️' }, { character: '💛' }, { character: '💚' }, { character: '💙' }, { character: '💜' },
            { character: '🖤' }, { character: '💔' }, { character: '❣️' }, { character: '💕' }, { character: '💞' },
            { character: '💓' }, { character: '💗' }, { character: '💖' }, { character: '💘' }, { character: '💝' },
            { character: '💟' }, { character: '☮️' }, { character: '✝️' }, { character: '☪️' }, { character: '🕉️' }
          ]
        }
      ],
      emojiSelCategory: []
    }
  },
  methods: {

    turnAlert(){ this.alertOn = !this.alertOn },

    dateToHour(value) {
      if(value) return DateTime.fromFormat(value, "dd/LL/yyyy HH:mm:ss").toFormat("HH:mm")
      return null
    },

    shortShowMsg(msg) {
      if (msg) {
        if (msg.length >= 20) {
          return msg.slice(0, 20) + '...';
        }
        return msg
      } 
    },

    selChat(index) {
      this.activeIndex = index
      if (!this.contacts[index].avatar) this.contacts[index].avatar = './img/blank-profile.jpg'
    },

    selMsg(text, index) {
      this.selectedMsg = { ...text, msgInfo: true, srcIndex: index };
    },

    lastMsg(contact) {
      let showMsg = contact.messages.filter((msg) => !msg.removedMsg);
      let lastReceivedMsg = showMsg[showMsg.length - 1];
      if(lastReceivedMsg) return lastReceivedMsg;
      return lastReceivedMsg = ''
    },

    sendMessage(msg) {
      if (msg.trim()) {
        let newSend = {
          date: DateTime.now().toFormat('dd/LL/yyyy HH:mm:ss'),
          message: msg.trim(),
          status: 'sent',
          msgMenu: false,
          deletedMsg: false,
          removedMsg: false,
          msgInfo: false
        };
        this.contacts[this.activeIndex].messages.push(newSend);
        this.newMessage = '';
        this.activeIndex = 0;
        setTimeout(() => {
          let defaultResponse = {
            date: DateTime.now().toFormat('dd/LL/yyyy HH:mm:ss'),
            message: 'Non lo so Michh, mi sembra falso!',
            status: 'received',
            msgMenu: false,
            deletedMsg: false,
            removedMsg: false,
            msgInfo: false
          };
          this.contacts[this.activeIndex].messages.push(defaultResponse);
        }, 1000)
      }
    },

    isReceived(text) {
      return text.status == 'received'
    },

    isBottom(index) {
      let par = this.openChat.findLastIndex((msg) => !msg.removedMsg );
      return index == par
    },

    deleteMsgForAll(item) {
      if (!item.removedMsg) {
        item.message = 'Questo messaggio è stato eliminato.';
        item.deletedMsg = true;
        item.msgMenu = false;
        item.msgInfo = false
      }
    },

    deleteMsgForMe(item) {
      if (!item.deletedMsg) {
        item.removedMsg = true;
        item.msgMenu = false;
        item.msgInfo = false;
      }
    },

    openMsgMenu(text) { text.msgMenu = !text.msgMenu },

    openEmojiMenu() {
      this.emojiMenu = !this.emojiMenu;
      this.emojiIndex = 0
    },

    selEmojiMenu(index) {this.emojiIndex = index},

    addEmojiToNewMessage(emoji) {this.newMessage += emoji},
  },
  
  computed: {
    sortedContacts() {
      return this.contacts.sort((a, b) => {
        let obj1 = 0;
        let obj2 = 0;
        if (b.messages.length > 0 ){ obj1 = DateTime.fromFormat(b.messages[b.messages.length - 1].date, "dd/LL/yyyy HH:mm:ss")}
        if (a.messages.length > 0 ){ obj2 = DateTime.fromFormat(a.messages[a.messages.length - 1].date, "dd/LL/yyyy HH:mm:ss")} 
        return obj1 < obj2 ? - 1 : obj1 > obj2 ? 1 : 0
      })
    },

    search() {
      this.contacts.forEach((element) => {
        let check = element.name.toLowerCase();
        if (check.includes(this.searchingChat.trim())) {
          element.visible = true;
        } else {
          element.visible = false;
        }
      })
    },

    lastReceived(){
      return this.contacts[this.activeIndex].messages.filter((msg) => msg.status == 'received')
    },

    lastSeen() {
        if(this.lastReceived.length > 0){
          let lastReceivedMsg = this.lastReceived[this.lastReceived.length - 1].date
          return this.dateToHour(lastReceivedMsg)
        }
    },

    openChat() {
      return this.contacts[this.activeIndex].messages
    },

    infoMsg() {
      return this.contacts[this.activeIndex].messages[this.selectedMsg.srcIndex]
    },

    
  }
}
).mount('#app')