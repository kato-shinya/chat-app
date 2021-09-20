<template>
  <main class="main-container">
    <TextBox :onPost="addMessage" />
    <div class="devider"></div>
    <MessageList :messages="reverseMessages" />
  </main>
</template>

<script>
import TextBox from "./TextBox.vue";
import MessageList from "./MessageList.vue";

export default {
  components: {
    TextBox,
    MessageList,
  },
  data() {
    return {
      messages: [],
    };
  },
  computed: {
    reverseMessages() {
      return [...this.messages].reverse();
    },
  },
  methods: {
    addMessage(message) {
      this.messages.push(message);
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
</style>