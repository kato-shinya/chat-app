<template>
  <main class="main-container">
    <TextBox :onPost="addMessage" />
    <div class="devider"></div>

    <Spinner v-if="!initialLoaded" />
    <p class="no-messages" v-else-if="initialLoaded && !this.messages.length">
      投稿データ0件
    </p>
    <MessageList :messages="reverseMessages" />
  </main>
</template>

<script>
import TextBox from "./TextBox.vue";
import MessageList from "./MessageList.vue";
import MessageModel from "../models/Message.js";
import Spinner from "./Spinner.vue";

export default {
  components: {
    TextBox,
    MessageList,
    Spinner,
  },
  data() {
    return {
      messages: [],
      initialLoaded: false,
    };
  },
  computed: {
    reverseMessages() {
      return [...this.messages].reverse();
    },
  },
  async created() {
    const messages = await this.fetchMessages();
    this.messages = messages;
    this.initialLoaded = true;
  },
  methods: {
    addMessage(message) {
      this.messages.push(message);
    },
    async fetchMessages() {
      let messages = [];
      try {
        messages = await MessageModel.fetchMessages();
      } catch (error) {
        alert(error.message);
      }

      return messages;
    },
  },
};
</script>

<style scoped>
.main-container {
  width: calc(100% - 200px);
  flex: 1;
  position: absolute;
  left: 200px;
}
.devider {
  border-top: 10px solid #ccc;
}
.no-messages {
  text-align: center;
}
</style>
