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
      emojiArray: [
        {
          emojiSection: '😎',
          emojis: [
            { character: '😀' }, { character: '😃' }, { character: '😄' }, { character: '😁' }, { character: '😆' },
            { character: '😅' }, { character: '😂' }, { character: '🙂' }, { character: '🙃' }, { character: '😉' },
            { character: '😊' }, { character: '😋' }, { character: '😎' }, { character: '😍' }, { character: '😘' },
            { character: '😗' }, { character: '😙' }, { character: '😚' }, { character: '☺️' }, { character: '🤗' },
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
    dateToHour(date) {
      let firstStage = date.split(' ');
      let secondStage = firstStage[1].split(':');
      return secondStage[0] + ':' + secondStage[1]
    },

    shortShowMsg(msg) {
      let maybeCropMsg = msg;
      if (msg.length >= 20) {
        maybeCropMsg = msg.slice(0, 20) + '...';
      }
      return maybeCropMsg
    },

    selChat(index) {
      this.activeIndex = index
      if (!this.contacts[index].avatar) this.contacts[index].avatar = './img/blank-profile.jpg'
    },

    selEmojiMenu(index){
      this.emojiSelCategory = this.emojiArray[index]
    },

    openEmojiMenu(){
      this.emojiMenu = !this.emojiMenu;
      this.selEmojiMenu(0)
    },

    addEmojiToNewMessage(emoji){
      this.newMessage += emoji
    },

    selMsg(text, index) {
      this.selectedMsg = { ...text, msgInfo: true, srcIndex: index };
    },

    lastMsgReceivedTime() {
      if (this.contacts[this.activeIndex].messages) {
        let receivedMsg = this.contacts[this.activeIndex].messages.filter((msg) => msg.status == 'received')
        let lastReceivedMsg = receivedMsg[receivedMsg.length - 1].date
        let result = this.dateToHour(lastReceivedMsg)
        return result
      }
    },

    lastMsg(contact) {
      let showMsg = contact.messages.filter((msg) => msg.removedMsg == false)
      let lastReceivedMsg = showMsg[showMsg.length - 1]
      return lastReceivedMsg.message
    },

    searchContactBy(value) {
      this.contacts.forEach((element) => {
        let check = element.name.toLowerCase();
        if (!check.includes(value)) {
          element.visible = false;
        } else {
          element.visible = true;
        }
      });

      this.new.forEach((element) => {
        let check = element.name.toLowerCase();
        if (!check.includes(value)) {
          element.visible = false;
        } else {
          element.visible = true;
        }
      })
    },

    sendMessage(msg) {
      if(msg.trim()){
        let newMsg = {
          date: luxon.DateTime.now().toFormat('dd/LL/yyyy HH:mm:ss'),
          message: msg.trim(),
          status: 'sent'
        };
        this.contacts[this.activeIndex].messages.push(newMsg);
        this.newMessage = '';
        setTimeout(() => {
          let newMsg = {
            date: luxon.DateTime.now().toFormat('dd/LL/yyyy HH:mm:ss'),
            message: 'Non lo so Michh, mi sembra falso!',
            status: 'received'
          };
          this.contacts[this.activeIndex].messages.push(newMsg);
        }, 1000)
      }
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
    }
  },
}
).mount('#app')