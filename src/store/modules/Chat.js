import api from '@/api'

export default {
  state: {
    chats: [
      {
      id: 0,
      title: "Чат с Анджелой",
      },
      {
        id: 1,
        title: "Чат с Васей"
      }
  ],
    messages: [
      {
        id: 0,
        from: 1,
        chat: 0,
        text: "Привет, мир!"
      },
      {
        id: 0,
        from: 2,
        chat: 0,
        text: "Привет, мужик!"
      }
  ],
  },

  getters: {
    chatMessages: (state) => (id) => {
      return state.messages.filter(message => message.chat === id)
    },
  },

  actions: {
    sendMessage({ state, commit }, message) {
    }
  },

  mutations: {
    setMessages(state, messages) {
      state.messages = messages
    }
  }
};