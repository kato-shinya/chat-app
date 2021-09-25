<template>
  <button
    class="button"
    @click="onClick"
    :disabled="!clickable"
    :class="{ disalbed: !clickable }"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "ボタン",
    },
    onClick: {
      type: Function,
      required: true,
    },
    clickable: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.button {
  display: inline-block;
  background: red;
  border-radius: 5px;
  color: white;
  padding: 10px;
  cursor: pointer;
  border: 0;
}
.button:hover {
  background-color: rgb(182, 0, 0);
}
.button:active {
  background: rgb(138, 13, 13);
}
.disalbed {
  opacity: 0.3;
}
</style>
